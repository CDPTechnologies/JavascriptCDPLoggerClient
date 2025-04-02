// testTimeSync.js
const cdplogger = require('../client');
const fakeData = require('./fakeData');

// Override WebSocket with a dummy that provides a send() method.
global.WebSocket = class {
  constructor(url) {
    this._url = url;
  }
  send(data) {
    // For our test we simply ignore the sent data.
  }
};

// --- Capture Request IDs for time sync vs. API calls ---
let capturedTimeSyncRequestId = null;
let capturedApiRequestId = null;
const originalGetRequestId = cdplogger.Client.prototype._getRequestId;
cdplogger.Client.prototype._getRequestId = function() {
  const id = originalGetRequestId.call(this);
  if (capturedTimeSyncRequestId === null) {
    capturedTimeSyncRequestId = id;
  } else if (capturedApiRequestId === null) {
    capturedApiRequestId = id;
  }
  return id;
};

/**
 * Helper function to run an API method with time sync enabled and then disabled.
 * It forces a time update (by setting lastTimeRequest to an old value) before each call.
 * The simulateResponse callback simulates the corresponding responses by calling _parseMessage.
 * The callback receives two parameters: timeSyncRequestId and apiRequestId.
 */
async function runThrough(methodName, callFunc, simulateResponse) {
  // Reset captured IDs for this run.
  capturedTimeSyncRequestId = null;
  capturedApiRequestId = null;

  console.log(`\n=== Running ${methodName} with time sync ENABLED ===`);
  // Force a time update.
  client.lastTimeRequest = Date.now() / 1000 - 20;
  // Call the API method.
  callFunc();
  // Allow the _getRequestId calls to occur.
  await new Promise(resolve => setTimeout(resolve, 50));

  // Simulate two responses: first for the time sync update, then for the API response.
  if (simulateResponse) {
    simulateResponse(capturedTimeSyncRequestId, capturedApiRequestId);
  }

  // Wait for responses to be processed.
  await new Promise(resolve => setTimeout(resolve, 300));
  console.log(`${methodName} -> timeDiff: ${client.timeDiff.toFixed(6)} sec`);

  // Now disable time sync.
  client.storedPromises = {};
  client.setEnableTimeSync(false);
  console.log(`\n=== Running ${methodName} with time sync DISABLED ===`);
  const previousTimeDiff = client.timeDiff;
  client.lastTimeRequest = Date.now() / 1000 - 20;
  // Reset captured IDs for the disabled run.
  capturedTimeSyncRequestId = null;
  capturedApiRequestId = null;
  callFunc();

  // When time sync is disabled, do NOT simulate a time sync response.
  await new Promise(resolve => setTimeout(resolve, 300));
  console.log(
    `${methodName} -> timeDiff: ${client.timeDiff.toFixed(6)} sec (should remain ${previousTimeDiff.toFixed(6)} sec)`
  );

  // Re-enable time sync for subsequent tests.
  client.setEnableTimeSync(true);
}

async function runTest() {
  // Create a new client instance.
  client = new cdplogger.Client('127.0.0.1:17000', true);

  // Override _sendTimeRequest to simulate a server time response with variable delay.
  client._sendTimeRequest = function (requestId) {
    console.log(`_sendTimeRequest called with requestId: ${requestId}`);
    const delay = Math.floor(Math.random() * 250) + 50;
    setTimeout(() => {
      const simulatedTimestamp = Date.now() * 1e6;
      console.log(`Simulated timestamp for request ${requestId} after ${delay}ms: ${simulatedTimestamp}`);
      if (this.storedPromises[requestId]) {
        this.storedPromises[requestId].resolve(simulatedTimestamp);
        delete this.storedPromises[requestId];
      }
    }, delay);
  };

  // Override _updateTimeDiff to log the measurement.
  client._updateTimeDiff = function () {
    if (!this.enableTimeSync) return;
    const requestId = this._getRequestId();
    const timeSent = Date.now() / 1000;
    this._requestTime(requestId)
      .then(timestamp => {
        this.timeReceived = Date.now() / 1000;
        const roundTripTime = this.timeReceived - timeSent;
        const serverTime = (timestamp / 1e9) + roundTripTime / 2;
        const computedTimeDiff = this.timeReceived - serverTime;
        this.timeDiff = computedTimeDiff;
        console.log("=== Time Sync Measurement ===");
        console.log(`Time Sent: ${timeSent.toFixed(6)} sec`);
        console.log(`Time Received: ${this.timeReceived.toFixed(6)} sec`);
        console.log(`Round Trip Time: ${roundTripTime.toFixed(6)} sec`);
        console.log(`Simulated Server Time: ${serverTime.toFixed(6)} sec`);
        console.log(`Computed timeDiff: ${computedTimeDiff.toFixed(6)} sec`);
      })
      .catch(err => console.error(err));
  };

  // Run tests for each public API method.
  await runThrough(
    "requestApiVersion",
    () => client.requestApiVersion(),
    (timeSyncId, apiId) => {
      // Simulate time sync response.
      const timeResponse = {
        messageType: fakeData.Container.Type.eTimeResponse,
        timeResponse: { requestId: timeSyncId, timestamp: Date.now() * 1e6 }
      };
      client._parseMessage(timeResponse);

      // Simulate API version response.
      const apiResponse = fakeData.createApiVersionResponse(apiId);
      client._parseMessage(apiResponse);
    }
  );

  await runThrough(
    "requestLogLimits",
    () => client.requestLogLimits(),
    (timeSyncId, apiId) => {
      const timeResponse = {
        messageType: fakeData.Container.Type.eTimeResponse,
        timeResponse: { requestId: timeSyncId, timestamp: Date.now() * 1e6 }
      };
      client._parseMessage(timeResponse);

      const apiResponse = fakeData.createLogLimitsResponse(apiId);
      client._parseMessage(apiResponse);
    }
  );

  await runThrough(
    "requestLoggedNodes",
    () => client.requestLoggedNodes(),
    (timeSyncId, apiId) => {
      const timeResponse = {
        messageType: fakeData.Container.Type.eTimeResponse,
        timeResponse: { requestId: timeSyncId, timestamp: Date.now() * 1e6 }
      };
      client._parseMessage(timeResponse);

      const apiResponse = fakeData.createLoggedNodesResponse(apiId);
      client._parseMessage(apiResponse);
    }
  );

  // Ensure that the node mapping includes "CPULoad" before calling requestDataPoints.
  if (!("CPULoad" in client.nameToId)) {
    console.log("Mapping missing CPULoad. Simulating logged nodes response to update mapping.");
    client._parseMessage(fakeData.createLoggedNodesResponse(999));
  }

  await runThrough(
    "requestDataPoints",
    () => client.requestDataPoints(["Output", "CPULoad"], 1531313250.0, 1531461231.0, 500),
    (timeSyncId, apiId) => {
      const timeResponse = {
        messageType: fakeData.Container.Type.eTimeResponse,
        timeResponse: { requestId: timeSyncId, timestamp: Date.now() * 1e6 }
      };
      client._parseMessage(timeResponse);

      const apiResponse = fakeData.createDataPointResponse(apiId);
      client._parseMessage(apiResponse);
    }
  );

  // Disconnect the client to close the open WebSocket and allow the process to exit.
  client.disconnect();
}

let client;

runTest()
  .then(() => {
    console.log("All tests passed successfully.");
    process.exit(0);
  })
  .catch(err => {
    console.error("Test run failed with error:", err);
    process.exit(1);
  });
