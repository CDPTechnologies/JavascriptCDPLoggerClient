/*global WebSocket*/
global.WebSocket = require('ws');
const Client = require('../client');
const fakeData = require('./fakeData');

describe('ClientTester', () => {
  let client;
  beforeEach(() => {
    // Override _connect to return a fake ws object that doesn't try to connect.
    Client.prototype._connect = function(url) {
      return {
        _url: url,
        close: jest.fn(),
        send: jest.fn()
      };
    };
    // Create a new client instance using two parameters: endpoint and autoReconnect.
    client = new Client('127.0.0.1:17000', true);
    // Adjust the client’s lastTimeRequest so that a new time request will be triggered.
    client.lastTimeRequest = Date.now() / 1000 - 11;
    // Prepopulate the lookup maps.
    client.idToName = { 0: "Output", 1: "CPULoad" };
    client.nameToId = { "Output": 0, "CPULoad": 1 };
  });

  afterEach(() => {
    client = null;
  });

  test('test_this', () => {
    expect(true).toBe(true);
  });

  test('test_run_event_loop', () => {
    client.runEventLoop = jest.fn();
    client.runEventLoop();
    expect(client.runEventLoop).toHaveBeenCalled();
  });

  test('test_disconnect', () => {
    client.ws = { close: jest.fn() };
    client._cleanupQueuedRequests = jest.fn();
    client.disconnect();
    expect(client.ws.close).toHaveBeenCalled();
    expect(client._cleanupQueuedRequests).toHaveBeenCalled();
  });

  test('test_time_request', () => {
    client.isOpen = true;
    client._sendTimeRequest = jest.fn();
    client._timeRequest();
    expect(client._sendTimeRequest).toHaveBeenCalledWith(0);
  });

  test('test_version_request_also_sends_time_request', () => {
    client.isOpen = true;
    client._sendTimeRequest = jest.fn();
    client._sendApiVersionRequest = jest.fn();
    client.requestApiVersion();
    expect(client._sendTimeRequest).toHaveBeenCalledWith(0);
    expect(client._sendApiVersionRequest).toHaveBeenCalledWith(1);
  });

  test('test_log_limits_request_also_sends_time_request', () => {
    client.isOpen = true;
    client._sendTimeRequest = jest.fn();
    client._sendLogLimitsRequest = jest.fn();
    client.requestLogLimits();
    expect(client._sendTimeRequest).toHaveBeenCalledWith(0);
    expect(client._sendLogLimitsRequest).toHaveBeenCalledWith(1);
  });

  test('test_logged_nodes_request_also_sends_time_request', () => {
    client.isOpen = true;
    client._sendTimeRequest = jest.fn();
    client._sendLoggedNodesRequest = jest.fn();
    client.requestLoggedNodes();
    expect(client._sendTimeRequest).toHaveBeenCalledWith(0);
    expect(client._sendLoggedNodesRequest).toHaveBeenCalledWith(1);
  });

  test('test_data_points_request_also_sends_time_request', done => {
    client.isOpen = true;
    client._sendTimeRequest = jest.fn();
    client._sendDataPointsRequest = jest.fn();
    client.requestDataPoints(["Output", "CPULoad"], 1530613239.0, 1530613270.0, 500);
    // Wait a tick for the promise chain to complete.
    setImmediate(() => {
      expect(client._sendTimeRequest).toHaveBeenCalledWith(0);
      expect(client._sendDataPointsRequest).toHaveBeenCalledWith([0, 1], 1530613239.0, 1530613270.0, 1, 500);
      done();
    });
  });

  test('test_version_request', done => {
    client.isOpen = true;
    client._sendTimeRequest = jest.fn();
    client._sendApiVersionRequest = jest.fn();
    client.requestApiVersion()
      .then(version => {
        expect(version).not.toBeNull();
        done();
      })
      .catch(done.fail);
    // Simulate a valid API version response.
    const response = fakeData.createApiVersionResponse();
    client._parseMessage(response);
  });

  test('test_version_request_error', done => {
    client.isOpen = true;
    client._sendTimeRequest = jest.fn();
    client._sendApiVersionRequest = jest.fn();
    client.requestApiVersion()
      .then(() => done.fail("Promise should not resolve"))
      .catch(err => {
        expect(err).toBeInstanceOf(Error);
        done();
      });
    // Simulate an API version error (version too low).
    const response = fakeData.createApiVersionErrorResponse();
    client._parseMessage(response);
  });

  test('test_log_limits_request', done => {
    client.isOpen = true;
    client._sendTimeRequest = jest.fn();
    client._sendLogLimitsRequest = jest.fn();
    client.requestLogLimits()
      .then(limits => {
        expect(limits.startS).toBeCloseTo(1529497537.61);
        expect(limits.endS).toBeCloseTo(1531389483.02);
        done();
      })
      .catch(done.fail);
    const response = fakeData.createLogLimitsResponse();
    client._parseMessage(response);
  });

  test('test_log_limits_request_with_time_diff', done => {
    client.timeDiff = 10;
    client.isOpen = true;
    client._sendTimeRequest = jest.fn();
    client._sendLogLimitsRequest = jest.fn();
    client.requestLogLimits()
      .then(limits => {
        expect(limits.startS).toBeCloseTo(1529497537.61 + 10);
        expect(limits.endS).toBeCloseTo(1531389483.02 + 10);
        done();
      })
      .catch(done.fail);
    const response = fakeData.createLogLimitsResponse();
    client._parseMessage(response);
  });

  test('test_logged_nodes_request', done => {
    client.isOpen = true;
    client._sendTimeRequest = jest.fn();
    client._sendLoggedNodesRequest = jest.fn();
    client.requestLoggedNodes()
      .then(nodes => {
        expect(nodes[0].name).toBe("Output");
        expect(nodes[0].routing).toBe("loggerApp.Sine.Output");
        done();
      })
      .catch(done.fail);
    const response = fakeData.createLoggedNodesResponse(1);
    client._parseMessage(response);
  });

  test('test_data_points_request', done => {
    client.isOpen = true;
    client._sendTimeRequest = jest.fn();
    client._sendDataPointsRequest = jest.fn();
    client.requestDataPoints(["Output", "CPULoad"], 1531313250.0, 1531461231.0, 500)
      .then(dataPoints => {
        expect(dataPoints[0].timestamp).toBeCloseTo(1531313250.0);
        expect(dataPoints[0].value["Output"].min).toBeCloseTo(0.638855091434);
        expect(dataPoints[0].value["Output"].max).toBeCloseTo(0.639955091434);
        expect(dataPoints[0].value["Output"].last).toBeCloseTo(0.638855091434);
        done();
      })
      .catch(done.fail);
    const response = fakeData.createDataPointResponse();
    client._parseMessage(response);
  });

  test('test_data_points_request_error_on_names', done => {
    client.isOpen = true;
    client._sendTimeRequest = jest.fn();
    client._sendLoggedNodesRequest = jest.fn();

    // Remove "Output" so that the lookup fails.
    delete client.nameToId["Output"];
    for (const id in client.idToName) {
      if (client.idToName[id] === "Output") {
        delete client.idToName[id];
      }
    }

    client.requestDataPoints(["Output", "CPULoad"], 1531313250.0, 1531461231.0, 500)
      .catch(error => {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toMatch(/Output/);
        done();
      });
    // Simulate a logged nodes response that does NOT include "Output".
    const response = {
      messageType: fakeData.Container.Type.eSignalInfoResponse,
      signalInfoResponse: {
        requestId: 2,
        name: ["CPULoad", "MemUsed", "CDPSignal"],
        id: [1, 2, 3],
        type: [],
        path: [
          "loggerApp.CPULoad",
          "loggerApp.MemUsed",
          "loggerApp.CDPSignal"
        ]
      }
    };
    client._parseMessage(response);
  });

  test('test_error_response_on_log_limits_request', done => {
    client.isOpen = true;
    client._sendTimeRequest = jest.fn();
    client._sendLogLimitsRequest = jest.fn();
    client.requestLogLimits()
      .catch(error => {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe("Error message");
        done();
      });
    const response = fakeData.createErrorResponse();
    client._parseMessage(response);
  });

  // Updated test for events with conditions using expected query structure.
  test('test_events_request_with_conditions', () => {
    client.isOpen = true;
    client._sendTimeRequest = jest.fn();
    client._sendEventsRequest = jest.fn();

    const queryWithConditions = {
      timeRangeBegin: 1000,
      timeRangeEnd: 2000,
      codeMask: 0,
      limit: 10,
      offset: 0,
      flags: 0,
      senderConditions: ["*CDPLoggerDemoApp.Sine*"],
      dataConditions: {
        "Text": "Component was suspended!"
      }
    };

    client.requestEvents(queryWithConditions);
    // Expect _sendTimeRequest to have been called first with id 0.
    expect(client._sendTimeRequest).toHaveBeenCalledWith(0);
    // Build the expected query using _buildEventQuery.
    const builtQuery = client._buildEventQuery(queryWithConditions);
    expect(client._sendEventsRequest).toHaveBeenCalledWith(1, builtQuery);
  });

  // Updated test for events with no known flags (code=0 => "None")
  test('test_event_code_description_none', done => {
    client.isOpen = true;
    client.requestEvents({})
      .then(events => {
        expect(events).toHaveLength(1);
        expect(events[0].code).toBe(0);
        expect(events[0].codeDescription).toBe("None");
        done();
      })
      .catch(done.fail);
  
    const response = {
      messageType: fakeData.Container.Type.eEventsResponse,
      eventsResponse: {
        requestId: 1,
        events: [
          {
            sender: "Test",
            data: {},
            timestampSec: 1234,
            id: 999,
            code: 0,
            status: 0,
            logstampSec: 1234
          }
        ]
      }
    };
    client._parseMessage(response);
  });

  test('test_event_code_description_multiple_flags', done => {
    client.isOpen = true;
    client.requestEvents({ timeRangeBegin: 1000, timeRangeEnd: 2000, codeMask: 0, limit: 10, offset: 0, flags: 0 })
      .then(events => {
        expect(events).toHaveLength(1);
        // code = 0x5 => (AlarmSet (0x1) + AlarmAck (0x4))
        expect(events[0].code).toBe(0x5);
        expect(events[0].codeDescription).toBe("AlarmSet + AlarmAck");
        done();
      })
      .catch(done.fail);
    // Simulate a multi-flag event response.
    const response = {
      messageType: fakeData.Container.Type.eEventsResponse,
      eventsResponse: {
        requestId: 1,
        events: [
          { sender: "MultiFlagSensor", data: { key: "value" }, timestampSec: 1500, id: 42, code: 0x5, status: 1, logstampSec: 1500 }
        ]
      }
    };
    client._parseMessage(response);
  });

  test('test_realistic_events', done => {
    client.isOpen = true;

    // Request events in a time window covering the sample timestamps (08:34:50..08:37:21)
    client.requestEvents({
      timeRangeBegin: 1740284000,
      timeRangeEnd:   1740284300,
      codeMask: 0xFFFFFFFF,
      limit: 10,
      offset: 0,
      flags: 0
    })
    .then(events => {
      // We expect to receive 4 events total
      expect(events).toHaveLength(4);

      // 1) InvalidLicense alarm
      expect(events[0].sender).toBe("CPDLoggerDemoApp.InvalidLicense");
      expect(events[0].data["Text"]).toBe("Invalid or missing feature license detected.");
      expect(events[0].codeDescription).toBe("AlarmSet");
      expect(events[0].status).toBe(1); // "Error"

      // 2) CPDEventNotification
      expect(events[1].sender).toBe("CDPLoggerDemoApp.CPDEventNotification");
      expect(events[1].data["Text"]).toBe("CDP event notice");
      expect(events[1].codeDescription).toBe("None");
      expect(events[1].status).toBe(3); // "Notify"

      // 3) A component is suspended
      expect(events[2].sender).toBe("CPDLoggerDemoApp");
      expect(events[2].data["Text"]).toContain("A component is suspended");
      expect(events[2].codeDescription).toBe("AlarmSet");
      expect(events[2].status).toBe(1); // "Error"

      // 4) Another suspended warning
      expect(events[3].sender).toBe("CPDLoggerDemoApp");
      expect(events[3].data["Text"]).toBe("Component was suspended");
      expect(events[3].codeDescription).toBe("None");
      expect(events[3].status).toBe(2); // "Warning"

      done();
    })
    .catch(done.fail);

    // Simulate the server responding with these "realistic" events
    const response = fakeData.createRealisticEventsResponse(1);
    client._parseMessage(response);
  });
});
