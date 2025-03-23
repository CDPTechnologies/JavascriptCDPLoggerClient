// testTimeSync.js
const Client = require('../client');
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

/**
 * Helper function to run an API method with time sync enabled and then disabled.
 * It forces an update (by setting lastTimeRequest to an old value) before each call.
 * The simulateResponse callback simulates the corresponding response by calling _parseMessage.
 */
async function runThrough(methodName, callFunc, simulateResponse) {
  console.log(`\n=== Running ${methodName} with time sync ENABLED ===`);
  // Force a time update by setting lastTimeRequest to an old value.
  client.lastTimeRequest = Date.now() / 1000 - 20;
  // Call the API method.
  callFunc();
  // Simulate a response if needed.
  if (simulateResponse) simulateResponse();
  // Wait longer for the time sync update to complete.
  await new Promise(resolve => setTimeout(resolve, 300));
  console.log(`${methodName} -> timeDiff: ${client.timeDiff.toFixed(6)} sec`);
  
  // Now disable time sync.
  // Clear any pending time requests so they don't update timeDiff later.
  client.storedPromises = {};
  client.setEnableTimeSync(false);
  console.log(`\n=== Running ${methodName} with time sync DISABLED ===`);
  const previousTimeDiff = client.timeDiff;
  client.lastTimeRequest = Date.now() / 1000 - 20;
  callFunc();
  // When time sync is disabled, do NOT simulate a response.
  await new Promise(resolve => setTimeout(resolve, 300));
  console.log(`${methodName} -> timeDiff: ${client.timeDiff.toFixed(6)} sec (should remain ${previousTimeDiff.toFixed(6)} sec)`);
  // Re-enable time sync for subsequent tests.
  client.setEnableTimeSync(true);
}

async function runTest() {
  // Create a new client instance with only endpoint and autoReconnect.
  client = new Client('127.0.0.1:17000', true);

  // Override _sendTimeRequest to simulate an immediate server time response with variable delay.
  client._sendTimeRequest = function (requestId) {
    console.log(`_sendTimeRequest called with requestId: ${requestId}`);
    // Simulate variable network delay (e.g., 50 to 300ms)
    const delay = Math.floor(Math.random() * 250) + 50;
    setTimeout(() => {
      // Simulate a server timestamp in nanoseconds.
      const simulatedTimestamp = Date.now() * 1e6;
      console.log(`Simulated timestamp for request ${requestId} after ${delay}ms: ${simulatedTimestamp}`);
      if (client.storedPromises[requestId]) {
        client.storedPromises[requestId].resolve(simulatedTimestamp);
        delete client.storedPromises[requestId];
      }
    }, delay);
  };

  // Override _updateTimeDiff to perform one measurement and log its details.
  client._updateTimeDiff = function () {
    if (!this.enableTimeSync) return;
    const requestId = this._getRequestId();
    const timeSent = Date.now() / 1000;
    // Call _requestTime (which now calls our overridden _sendTimeRequest).
    this._requestTime(requestId)
      .then(timestamp => {
        // Simulate a time response arriving.
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

  // Use the production _requestTime (which already checks enableTimeSync).
  // No override needed here.

  // Now run through several public API methods.
  await runThrough(
    "requestApiVersion",
    () => client.requestApiVersion(),
    () => {
      // Simulate a valid API version response.
      const response = fakeData.createApiVersionResponse();
      client._parseMessage(response);
    }
  );

  await runThrough(
    "requestLogLimits",
    () => client.requestLogLimits(),
    () => {
      const response = fakeData.createLogLimitsResponse();
      client._parseMessage(response);
    }
  );

  await runThrough(
    "requestLoggedNodes",
    () => client.requestLoggedNodes(),
    () => {
      const response = fakeData.createLoggedNodesResponse(1);
      client._parseMessage(response);
    }
  );

  await runThrough(
    "requestDataPoints",
    () => client.requestDataPoints(["Output", "CPULoad"], 1531313250.0, 1531461231.0, 500),
    () => {
      const response = fakeData.createDataPointResponse();
      client._parseMessage(response);
    }
  );
}

let client;
runTest().catch(console.error);
