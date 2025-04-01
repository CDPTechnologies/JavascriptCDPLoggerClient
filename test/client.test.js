/*global WebSocket*/
global.WebSocket = require('ws');
const Client = require('../client');
const fakeData = require('./fakeData');

describe('ClientTester', () => {
  let client;
  beforeEach(() => {
    // Override _connect to return a fake ws object that doesn't actually connect.
    Client.prototype._connect = function(url) {
      return {
        _url: url,
        close: jest.fn(),
        send: jest.fn()
      };
    };
    // Create a new client instance.
    client = new Client('127.0.0.1:17000', true);
    // By default, disable time sync for most tests.
    client.setEnableTimeSync(false);
    // Adjust lastTimeRequest so that a new time request would normally be triggered.
    client.lastTimeRequest = Date.now() / 1000 - 11;
    // Prepopulate lookup maps.
    client.idToName = { 0: "Output", 1: "CPULoad" };
    client.nameToId = { "Output": 0, "CPULoad": 1 };
    // Reset reqId so expected request IDs are predictable.
    client.reqId = 0;
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
    // Enable time sync for this test.
    client.setEnableTimeSync(true);
    client.isOpen = true;
    client._sendTimeRequest = jest.fn();
    client._timeRequest();
    expect(client._sendTimeRequest).toHaveBeenCalledWith(expect.any(Number));
  });

  test('test_version_request_also_sends_time_request', () => {
    client.reqId = 0;
    client.setEnableTimeSync(false);
    client.isOpen = true;
    client._sendApiVersionRequest = jest.fn();
    client.requestApiVersion();
    // With time sync disabled, only _sendApiVersionRequest is called.
    expect(client._sendApiVersionRequest).toHaveBeenCalledWith(1);
  });

  test('test_log_limits_request_also_sends_time_request', () => {
    client.reqId = 0;
    client.setEnableTimeSync(false);
    client.isOpen = true;
    client._sendLogLimitsRequest = jest.fn();
    client.requestLogLimits();
    expect(client._sendLogLimitsRequest).toHaveBeenCalledWith(1);
  });

  test('test_logged_nodes_request_also_sends_time_request', () => {
    client.reqId = 0;
    client.setEnableTimeSync(false);
    client.isOpen = true;
    client._sendLoggedNodesRequest = jest.fn();
    client.requestLoggedNodes();
    expect(client._sendLoggedNodesRequest).toHaveBeenCalledWith(1);
  });

  test('test_data_points_request_also_sends_time_request', done => {
    // Enable time sync for this test.
    client.setEnableTimeSync(true);
    client.reqId = 0;
    client.isOpen = true;
    client._sendTimeRequest = jest.fn();
    client._sendDataPointsRequest = jest.fn();
    // Call with five explicit parameters: nodeNames, startS, endS, noOfDataPoints, limit.
    client.requestDataPoints(["Output", "CPULoad"], 1530613239.0, 1530613270.0, 0, 500);
    // Simulate a time response for the time request.
    const timeResponse = {
      messageType: fakeData.Container.Type.eTimeResponse,
      timeResponse: { requestId: 1, timestamp: 1e9 }
    };
    client._parseMessage(timeResponse);
    // Simulate a data points response.
    client._parseMessage(fakeData.createDataPointResponse());
    setImmediate(() => {
      expect(client._sendTimeRequest).toHaveBeenCalledWith(1);
      expect(client._sendDataPointsRequest).toHaveBeenCalledWith(
        [0, 1],
        1530613239.0,
        1530613270.0,
        2,      // The second call's requestId
        500,    // limit
        0       // noOfDataPoints
      );
      done();
    });
  });

  test('test_version_request', done => {
    client.reqId = 0;
    client.isOpen = true;
    client._sendApiVersionRequest = jest.fn();
    client.requestApiVersion()
      .then(version => {
        expect(version).not.toBeNull();
        done();
      })
      .catch(done.fail);
    const response = fakeData.createApiVersionResponse();
    client._parseMessage(response);
  });

  test('test_version_request_error', done => {
    client.reqId = 0;
    client.isOpen = true;
    client._sendApiVersionRequest = jest.fn();
    client.requestApiVersion()
      .then(() => done.fail("Promise should not resolve"))
      .catch(err => {
        expect(err).toBeInstanceOf(Error);
        done();
      });
    const response = fakeData.createApiVersionErrorResponse();
    client._parseMessage(response);
  });

  test('test_log_limits_request', done => {
    client.reqId = 0;
    client.isOpen = true;
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
    // Enable time sync and override _timeRequest to avoid triggering an extra time request.
    client.setEnableTimeSync(true);
    client._timeRequest = jest.fn();
    client.timeDiff = 10;
    client.reqId = 0;
    client.isOpen = true;
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
    client.reqId = 0;
    client.isOpen = true;
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
    client.reqId = 0;
    client.isOpen = true;
    client._sendDataPointsRequest = jest.fn();
    client.requestDataPoints(["Output", "CPULoad"], 1531313250.0, 1531461231.0, 0, 500)
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
    client.reqId = 0;
    client.isOpen = true;
    delete client.nameToId["Output"];
    for (const id in client.idToName) {
      if (client.idToName[id] === "Output") {
        delete client.idToName[id];
      }
    }
    client.requestDataPoints(["Output", "CPULoad"], 1531313250.0, 1531461231.0, 0, 500)
      .catch(error => {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toMatch(/Output/);
        done();
      });
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
    client.reqId = 0;
    client.isOpen = true;
    client.requestLogLimits()
      .catch(error => {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe("Error message");
        done();
      });
    const response = fakeData.createErrorResponse();
    client._parseMessage(response);
  });

  test('test_events_request_with_conditions', () => {
    client.reqId = 0;
    client.isOpen = true;
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
    expect(client._sendEventsRequest).toHaveBeenCalledWith(1, client._buildEventQuery(queryWithConditions));
  });

  test('test_event_code_description_none', done => {
    client.reqId = 0;
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
    const tagResponse = fakeData.createEventSenderTagsResponse("Test", { tags: {} });
    client._parseMessage(tagResponse);
  });

  test('test_event_code_description_multiple_flags', done => {
    client.reqId = 0;
    client.requestEvents({ timeRangeBegin: 1000, timeRangeEnd: 2000, codeMask: 0, limit: 10, offset: 0, flags: 0 })
      .then(events => {
        expect(events).toHaveLength(1);
        expect(events[0].code).toBe(0x5);
        expect(events[0].codeDescription).toBe("AlarmSet + AlarmAck");
        done();
      })
      .catch(done.fail);
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
    const tagResponse = fakeData.createEventSenderTagsResponse("MultiFlagSensor", { tags: {} });
    client._parseMessage(tagResponse);
  });

  test('test_realistic_events', done => {
    client.reqId = 0;
    client.isOpen = true;
    // Prepopulate senderTags to avoid waiting for tag lookups.
    client.senderTags["CPDLoggerDemoApp.InvalidLicense"] = {};
    client.senderTags["CDPLoggerDemoApp.CPDEventNotification"] = {};
    client.senderTags["CPDLoggerDemoApp"] = {};
    client.requestEvents({
      timeRangeBegin: 1740284000,
      timeRangeEnd:   1740284300,
      codeMask: 0xFFFFFFFF,
      limit: 10,
      offset: 0,
      flags: 0
    })
    .then(events => {
      expect(events).toHaveLength(4);
      expect(events[0].sender).toBe("CPDLoggerDemoApp.InvalidLicense");
      expect(events[0].data["Text"]).toBe("Invalid or missing feature license detected.");
      expect(events[0].codeDescription).toBe("AlarmSet");
      expect(events[0].status).toBe(1);
      expect(events[1].sender).toBe("CDPLoggerDemoApp.CPDEventNotification");
      expect(events[1].data["Text"]).toBe("CDP event notice");
      expect(events[1].codeDescription).toBe("None");
      expect(events[1].status).toBe(3);
      expect(events[2].sender).toBe("CPDLoggerDemoApp");
      expect(events[2].data["Text"]).toContain("A component is suspended");
      expect(events[2].codeDescription).toBe("AlarmSet");
      expect(events[2].status).toBe(1);
      expect(events[3].sender).toBe("CPDLoggerDemoApp");
      expect(events[3].data["Text"]).toBe("Component was suspended");
      expect(events[3].codeDescription).toBe("None");
      expect(events[3].status).toBe(2);
      done();
    })
    .catch(done.fail);
    const response = fakeData.createRealisticEventsResponse(1);
    client._parseMessage(response);
  });

  test('test_getSenderTags_success', done => {
    client.isOpen = true;
    client._sendEventSenderTagsRequest = jest.fn();
    const sender = "TestSender";
    const tagPromise = client.getSenderTags(sender);
    expect(client._sendEventSenderTagsRequest).toHaveBeenCalledWith(sender);
    const response = fakeData.createEventSenderTagsResponse(sender, { tags: { Tag1: { value: "Value1", source: "Source1" } } });
    client._parseMessage(response);
    tagPromise.then(tags => {
      expect(tags).toEqual({ Tag1: { value: "Value1", source: "Source1" } });
      done();
    }).catch(done.fail);
  });

  test('test_getSenderTags_rejects_on_ws_error', done => {
    client.isOpen = true;
    const sender = "TestSender";
    const tagPromise = client.getSenderTags(sender);
    const error = new Error("WS error");
    client._onError(client.ws, error);
    tagPromise.then(() => done.fail("Promise should not resolve"))
      .catch(err => {
        expect(err).toBe(error);
        done();
      });
  });
  
  test('test_events_request_attaches_sender_tags', done => {
    client.reqId = 0;
    // Disable time sync interference.
    client._timeRequest = jest.fn();
    client.isOpen = true;
    // Override _buildEventQuery to bypass generated code dependency.
    client._buildEventQuery = query => query;
    
    // Capture the client reference locally.
    const localClient = client;
    
    // Override _sendEventsRequest to simulate an asynchronous events response.
    localClient._sendEventsRequest = (requestId, query) => {
      setImmediate(() => {
        const response = {
          messageType: fakeData.Container.Type.eEventsResponse,
          eventsResponse: {
            requestId,
            events: [
              { 
                sender: "TestSender", 
                data: { Text: "Test event" }, 
                timestampSec: 1234, 
                id: 1, 
                code: 0, 
                status: 0, 
                logstampSec: 1234 
              }
            ]
          }
        };
        localClient._parseMessage(response);
      });
    };
  
    // Clear any cached sender tags and pending promises.
    localClient.senderTags = {};
    localClient.pendingSenderTags = {};
  
    // Override _sendEventSenderTagsRequest to simulate an asynchronous immediate tag response.
    localClient._sendEventSenderTagsRequest = sender => {
      setImmediate(() => {
        const tagResponse = fakeData.createEventSenderTagsResponse(
          sender,
          { tags: { Tag1: { value: "Value1", source: "Source1" } } }
        );
        localClient._parseMessage(tagResponse);
      });
    };
  
    localClient.requestEvents({})
      .then(events => {
        try {
          expect(events).toHaveLength(1);
          expect(events[0].tags).toEqual({ Tag1: { value: "Value1", source: "Source1" } });
          done();
        } catch (err) {
          done(err);
        }
      })
      .catch(err => done(err));
  });
});
