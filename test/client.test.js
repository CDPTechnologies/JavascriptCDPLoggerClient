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

  // Added test for events
  test('test_events_request', done => {
    client.isOpen = true;
    client._sendTimeRequest = jest.fn();
    client._sendEventsRequest = jest.fn();
    client.requestEvents({ timeRangeBegin: 1000, timeRangeEnd: 2000, codeMask: 0, limit: 10, offset: 0, flags: 0 })
      .then(events => {
        expect(events).toBeDefined();
        expect(events.length).toBe(1);
        expect(events[0].sender).toBe("TestSender");
        expect(events[0].data.key).toBe("value");
        expect(events[0].timestampSec).toBeCloseTo(1500);
        done();
      })
      .catch(done.fail);
    // Simulate an events response.
    const response = {
      messageType: fakeData.Container.Type.eEventsResponse,
      eventsResponse: {
        requestId: 1,
        events: [
          { sender: "TestSender", data: { key: "value" }, timestampSec: 1500, id: 42, code: 100, status: 1, logstampSec: 1500 }
        ]
      }
    };
    client._parseMessage(response);
  });
});
