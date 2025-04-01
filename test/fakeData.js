// fakeData.js

const Container = {
  Type: {
    eSignalInfoRequest: 1,
    eSignalInfoResponse: 2,
    eSignalDataRequest: 3,
    eSignalDataResponse: 4,
    eCriterionLimitsRequest: 5,
    eCriterionLimitsResponse: 6,
    eVersionRequest: 7,
    eVersionResponse: 8,
    eError: 9,
    eTimeRequest: 10,
    eTimeResponse: 11,
    eEventSenderTagsRequest: 12,
    eEventSenderTagsResponse: 13,
    eCountEventsRequest: 14,
    eCountEventsResponse: 15,
    eEventsRequest: 16,
    eEventsResponse: 17
  }
};

function createApiVersionResponse() {
  return {
    messageType: Container.Type.eVersionResponse,
    versionResponse: { requestId: 1, version: "3.0" }
  };
}

function createApiVersionErrorResponse() {
  return {
    messageType: Container.Type.eVersionResponse,
    versionResponse: { requestId: 1, version: "1.0" }
  };
}

function createLogLimitsResponse() {
  return {
    messageType: Container.Type.eCriterionLimitsResponse,
    criterionLimitsResponse: {
      requestId: 1,
      criterionMin: 1529497537.61,
      criterionMax: 1531389483.02
    }
  };
}

function createLoggedNodesResponse(requestId) {
  return {
    messageType: Container.Type.eSignalInfoResponse,
    signalInfoResponse: {
      requestId: requestId,
      name: ["Output", "CPULoad", "MemUsed", "CDPSignal"],
      id: [0, 1, 2, 3],
      type: [],
      path: [
        "loggerApp.Sine.Output",
        "loggerApp.CPULoad",
        "loggerApp.MemUsed",
        "loggerApp.CDPSignal"
      ]
    }
  };
}

function createDataPointResponse() {
  return {
    messageType: Container.Type.eSignalDataResponse,
    signalDataResponse: {
      requestId: 1,
      criterion: [1531313250.0, 1530613239.063119],
      row: [
        {
          signalId: [0, 1],
          minValues: [{ dValue: 0.638855091434 }, { dValue: 0.538855091434 }],
          maxValues: [{ dValue: 0.639955091434 }, { dValue: 0.53955091434 }],
          lastValues: [{ dValue: 0.638855091434 }, { dValue: 0.538855091434 }]
        },
        {
          signalId: [0, 1],
          minValues: [{ dValue: 0.738855091434 }, { dValue: 0.338855091434 }],
          maxValues: [{ dValue: 0.739955091434 }, { dValue: 0.358855091434 }],
          lastValues: [{ dValue: 0.738855091434 }, { dValue: 0.348855091434 }]
        }
      ]
    }
  };
}

function createErrorResponse() {
  return {
    messageType: Container.Type.eError,
    error: {
      requestId: 1,
      errorMessage: "Error message",
      errorCode: 1234567
    }
  };
}

function createRealisticEventsResponse(requestId = 1) {
  return {
    messageType: Container.Type.eEventsResponse,
    eventsResponse: {
      requestId,
      events: [
        {
          sender: "CPDLoggerDemoApp.InvalidLicense",
          data: {
            Text: "Invalid or missing feature license detected."
          },
          timestampSec: 1740284241,
          id: 101,
          code: 0x1,
          status: 1,
          logstampSec: 1740284241
        },
        {
          sender: "CDPLoggerDemoApp.CPDEventNotification",
          data: {
            Text: "CDP event notice"
          },
          timestampSec: 1740284167,
          id: 102,
          code: 0,
          status: 3,
          logstampSec: 1740284167
        },
        {
          sender: "CPDLoggerDemoApp",
          data: {
            Text: "A component is suspended"
          },
          timestampSec: 1740284145,
          id: 103,
          code: 0x1,
          status: 1,
          logstampSec: 1740284145
        },
        {
          sender: "CPDLoggerDemoApp",
          data: {
            Text: "Component was suspended"
          },
          timestampSec: 1740284090,
          id: 104,
          code: 0,
          status: 2,
          logstampSec: 1740284090
        }
      ]
    }
  };
}

function createEventSenderTagsResponse(sender, tagMap) {
  return {
    messageType: Container.Type.eEventSenderTagsResponse,
    eventSenderTagsResponse: {
      senderTags: {
        [sender]: tagMap
      }
    }
  };
}


module.exports = {
  createApiVersionResponse,
  createApiVersionErrorResponse,
  createLogLimitsResponse,
  createLoggedNodesResponse,
  createDataPointResponse,
  createErrorResponse,
  createRealisticEventsResponse,
  createEventSenderTagsResponse,
  Container
};
