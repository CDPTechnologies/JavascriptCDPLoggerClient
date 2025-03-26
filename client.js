// client.js
const WebSocket = require('ws');
const root = require('./generated/containerPb.js');
const Container = root.DBMessaging.Protobuf.Container;
const CDPValueType = root.ICD.Protobuf.CDPValueType;

/**
 * A client for interacting with CDP Logger or LogServer via WebSocket.
 */
class Client {
  /**
   * @param {string} endpoint - The logger endpoint (e.g. "127.0.0.1:17000" or "ws://127.0.0.1:17000")
   * @param {boolean} [autoReconnect=true] - Automatically reconnect if the connection is lost
   */
  constructor(endpoint, autoReconnect = true) {
    // If endpoint does not start with "ws://" or "wss://", prepend "ws://"
    let url = endpoint;
    if (!/^wss?:\/\//.test(url)) {
      url = `ws://${url}`;
    }

    this.reqId = -1;
    this.autoReconnect = autoReconnect;
    this.enableTimeSync = true; // Time synchronization is enabled by default.

    this.isOpen = false;
    this.queuedRequests = {};
    this.storedPromises = {};
    this.nameToId = {};
    this.idToName = {};

    // Mapping for signal types (in case we need to interpret values).
    this.nameToType = {};

    // Time-diff related
    this.timeDiff = 0;
    this.timeReceived = null;
    this.lastTimeRequest = Date.now() / 1000;
    this.haveSentQueuedReq = false;
    this.roundTripTimes = {};

    // Create the WebSocket connection
    this.ws = this._connect(url);
  }

  /**
   * Enable or disable time synchronization.
   *
   * Note:
   * Time sync is triggered on-demand (e.g., with the next request) or after a timeout.
   * Re-enabling time sync will automatically sync on the next operation.
   * For immediate sync, call `_updateTimeDiff()` explicitly.
   *
   * @param {boolean} enable - True to enable, false to disable time sync.
   */
  setEnableTimeSync(enable) {
    this.enableTimeSync = enable;
    if (!enable) {
      // Cancel any pending time sync requests so they won’t update timeDiff later.
      for (const key in this.storedPromises) {
        this.storedPromises[key].reject(new Error("Time sync disabled"));
      }
      this.storedPromises = {};
    }
  }

  _connect(url) {
    const ws = new WebSocket(url);
    ws._url = url;
    ws.binaryType = 'arraybuffer';
    ws.onopen = () => this._onOpen(ws);
    ws.onmessage = (event) => this._handleMessage(ws, event.data);
    ws.onerror = (error) => this._onError(ws, error);
    ws.onclose = () => this._onClose(ws);
    return ws;
  }

  _onOpen(ws) {
    this.isOpen = true;
    if (this.enableTimeSync) {
      this._updateTimeDiff();
    }
    this.lastTimeRequest = Date.now() / 1000;
  }

  _onError(ws, error) {
    if (!error) {
      error = new Error("Something went wrong");
    }
    if (!this.autoReconnect) {
      for (const key in this.storedPromises) {
        this.storedPromises[key].reject(error);
      }
      this.storedPromises = {};
      this.queuedRequests = {};
    }
  }

  _onClose(ws) {
    this.isOpen = false;
    if (!this.autoReconnect) {
      this._onError(ws, new Error("Connection was closed"));
    } else {
      // Try to reconnect after a delay
      setTimeout(() => {
        this.ws = this._connect(ws._url);
      }, 1000);
    }
  }

  disconnect() {
    this.autoReconnect = false;
    this._cleanupQueuedRequests();
    this.isOpen = false;
    if (this.ws) {
      this.ws.close();
    }
  }

  _cleanupQueuedRequests() {
    for (const key in this.storedPromises) {
      this.storedPromises[key].reject(new Error("Connection was closed"));
    }
    this.storedPromises = {};
    this.queuedRequests = {};
  }

  // --- Public API methods ---

  /**
   * Request the API version.
   */
  requestApiVersion() {
    this._timeRequest();
    const requestId = this._getRequestId();
    if (!this.isOpen) {
      this.queuedRequests[requestId] = "api_version";
    } else {
      this._sendApiVersionRequest(requestId);
    }
    return new Promise((resolve, reject) => {
      this.storedPromises[requestId] = { resolve, reject };
    });
  }

  /**
   * Request the list of logged nodes.
   */
  requestLoggedNodes() {
    this._timeRequest();
    const requestId = this._getRequestId();
    if (!this.isOpen) {
      this.queuedRequests[requestId] = "logged_nodes";
    } else {
      this._sendLoggedNodesRequest(requestId);
    }
    return new Promise((resolve, reject) => {
      this.storedPromises[requestId] = { resolve, reject };
    });
  }

  /**
   * Request the log limits.
   */
  requestLogLimits() {
    this._timeRequest();
    const requestId = this._getRequestId();
    if (!this.isOpen) {
      this.queuedRequests[requestId] = "log_limits";
    } else {
      this._sendLogLimitsRequest(requestId);
    }
    return new Promise((resolve, reject) => {
      this.storedPromises[requestId] = { resolve, reject };
    });
  }

  /**
   * Request data points for given node names and time range.
   * @param {Array<string>} nodeNames
   * @param {number} startS
   * @param {number} endS
   * @param {number} noOfDataPoints
   * @returns {Promise<Array>}
   */
  requestDataPoints(nodeNames, startS, endS, noOfDataPoints) {
    this._timeRequest();
    const requestId = this._getRequestId();
    const promise = new Promise((resolve, reject) => {
      this.storedPromises[requestId] = { resolve, reject };
    });
    if (!this.isOpen) {
      this.queuedRequests[requestId] = ["node_values", nodeNames, startS, endS, noOfDataPoints];
    } else {
      this._reqDataPoints(nodeNames, startS, endS, noOfDataPoints, requestId);
    }
    return promise;
  }

  /**
   * Request events based on the provided query parameters.
   *
   * The `query.flags` field uses bitmask values similar to an enum:
   *
   *   0 = None  
   *   1 = NewestFirst  
   *   2 = TimeRangeBeginExclusive  
   *   4 = TimeRangeEndExclusive  
   *   8 = UseLogStampForTimeRange  
   *
   * In addition, the user can simply supply the following properties in the query object:
   *
   *   - **senderConditions**: An array of sender strings (exact matches by default).
   *   - **dataConditions**: An object where each key is a data field name and the value can be:
   *       - A string (defaults to an exact match),
   *       - An array of strings,
   *       - An object (or array of objects) with properties:
   *           - `value`: the string value to match,
   *           - `matchType`: either `"exact"` (default) or `"wildcard"`.
   *
   * The helper method `_buildEventQuery(query)` converts this simple plain object into a proper
   * `DBMessaging.Protobuf.EventQuery` message.
   *
   * enum EventQuery::MatchType:
   *   - Exact (0): The string must match exactly.
   *   - Wildcard (1): The string may contain wildcards.
   *
   * Example usage:
   *
   *   // Filter for events with sender exactly "CDPLoggerDemoApp.InvalidLicense":
   *   { senderConditions: ["CDPLoggerDemoApp.InvalidLicense"] }
   *
   *   // Filter for events where the "Text" data field equals "Invalid or missing feature license detected.":
   *   { dataConditions: { "Text": "Invalid or missing feature license detected." } }
   *
   *
   * @param {Object} query - A simple plain object representing the EventQuery.
   * @returns {Promise<Array>} Resolves with an array of events (each event includes a 'codeDescription').
   */
  requestEvents(query) {
    this._timeRequest();
    const requestId = this._getRequestId();
    // Convert the simple query into a proper EventQuery message.
    const eventQuery = this._buildEventQuery(query);
    

    
    if (!this.isOpen) {
      this.queuedRequests[requestId] = { type: "events", query: eventQuery };
    } else {
      this._sendEventsRequest(requestId, eventQuery);
    }
    return new Promise((resolve, reject) => {
      this.storedPromises[requestId] = { resolve, reject };
    });
  }

  // --- Internal methods ---

  _sendEventsRequest(requestId, query) {
    const container = Container.create();
    container.messageType = Container.Type.eEventsRequest;
    container.eventsRequest = { requestId, query };
    const buffer = Container.encode(container).finish();
    this.ws.send(buffer);
  }

  /**
   * Helper method to build a proper EventQuery message from a simple plain object.
   *
   *
   *
   *
   * @param {Object} query - The simple plain object query.
   * @returns {DBMessaging.Protobuf.EventQuery} - The built EventQuery message.
   */
  _buildEventQuery(query) {
    const root = require('./generated/containerPb.js');
    const { EventQuery } = root.DBMessaging.Protobuf;
    const { MatchType } = EventQuery;

    // Create base query with primitive fields
    const baseQuery = {
      timeRangeBegin: query.timeRangeBegin || 0,
      timeRangeEnd: query.timeRangeEnd || Math.floor(Date.now() / 1000),
      codeMask: query.codeMask !== undefined ? query.codeMask : 0xFFFFFFFF,
      limit: query.limit || 50,
      offset: query.offset || 0,
      flags: query.flags || 0
    };

    // Build sender conditions if present
    if (query.senders && query.senders.length > 0) {
      baseQuery.senderConditions = {
        conditions: query.senders.map(sender => ({
          value: sender,
          type: MatchType.Exact
        }))
      };
    }

    // Build data conditions if present
    if (query.dataConditions) {
      const dataConds = {};
      for (const key in query.dataConditions) {
        const val = query.dataConditions[key];
        const conditions = [];
        
        if (Array.isArray(val)) {
          for (const item of val) {
            conditions.push({
              value: String(item),
              type: MatchType.Exact
            });
          }
        } else {
          conditions.push({
            value: String(val),
            type: MatchType.Exact
          });
        }
        
        // Store without any table qualification
        dataConds[key] = { conditions };
      }
      baseQuery.dataConditions = dataConds;
    }

    return EventQuery.create(baseQuery);
  }
  

  
  

  /**
   * Converts a numeric CDP event code into a descriptive string.
   * Multiple flags can be set simultaneously, so we combine them.
   *
   * Common codes (from the docs):
   *   0x1        = AlarmSet
   *   0x2        = AlarmClr
   *   0x4        = AlarmAck
   *   0x40       = AlarmReprise
   *   0x100      = SourceObjectUnavailable
   *   0x40000000 = NodeBoot
   *
   * @param {number} code - The event code from an eEventsResponse.
   * @returns {string} - A human-readable combination of flags.
   */
  getEventCodeDescription(code) {
    const flags = [];
    if (code & 0x1) flags.push("AlarmSet");
    if (code & 0x2) flags.push("AlarmClr");
    if (code & 0x4) flags.push("AlarmAck");
    if (code & 0x40) flags.push("AlarmReprise");
    if (code & 0x100) flags.push("SourceObjectUnavailable");
    if (code & 0x40000000) flags.push("NodeBoot");

    if (flags.length === 0) {
      flags.push("None");
    }
    return flags.join(" + ");
  }

  _handleMessage(ws, message) {
    const data = Container.decode(new Uint8Array(message));
    this._parseMessage(data);
  }

  _parseMessage(data) {
    switch (data.messageType) {
      case Container.Type.eError:
        if (this.storedPromises[data.error.requestId]) {
          const { reject } = this.storedPromises[data.error.requestId];
          delete this.storedPromises[data.error.requestId];
          reject(new Error(data.error.errorMessage));
        }
        break;

      case Container.Type.eTimeResponse:
        this.timeReceived = Date.now() / 1000;
        if (this.storedPromises[data.timeResponse.requestId]) {
          const { resolve } = this.storedPromises[data.timeResponse.requestId];
          delete this.storedPromises[data.timeResponse.requestId];
          resolve(data.timeResponse.timestamp);
        }
        break;

      case Container.Type.eSignalInfoResponse: {
        const nodes = [];
        this.nameToId = {};
        this.idToName = {};
        for (let i = 0; i < data.signalInfoResponse.name.length; i++) {
          const node = {
            name: data.signalInfoResponse.name[i],
            routing: data.signalInfoResponse.path[i]
          };
          if (data.signalInfoResponse.tagMap && data.signalInfoResponse.tagMap[i]) {
            node.tags = this._convertTagMap(data.signalInfoResponse.tagMap[i]);
          }
          this.nameToId[data.signalInfoResponse.name[i]] = data.signalInfoResponse.id[i];
          this.idToName[data.signalInfoResponse.id[i]] = data.signalInfoResponse.name[i];
          nodes.push(node);
        }
        if (this.storedPromises[data.signalInfoResponse.requestId]) {
          const { resolve } = this.storedPromises[data.signalInfoResponse.requestId];
          delete this.storedPromises[data.signalInfoResponse.requestId];
          resolve(nodes);
        }
        break;
      }

      case Container.Type.eCriterionLimitsResponse:
        if (this.enableTimeSync) {
          data.criterionLimitsResponse.criterionMin += this.timeDiff;
          data.criterionLimitsResponse.criterionMax += this.timeDiff;
        }
        {
          const limits = {
            startS: data.criterionLimitsResponse.criterionMin,
            endS: data.criterionLimitsResponse.criterionMax
          };
          if (this.storedPromises[data.criterionLimitsResponse.requestId]) {
            const { resolve } = this.storedPromises[data.criterionLimitsResponse.requestId];
            delete this.storedPromises[data.criterionLimitsResponse.requestId];
            resolve(limits);
          }
        }
        break;

      case Container.Type.eVersionResponse: {
        const version = parseFloat(data.versionResponse.version);
        if (version < 3.0) {
          if (this.storedPromises[data.versionResponse.requestId]) {
            const { reject } = this.storedPromises[data.versionResponse.requestId];
            delete this.storedPromises[data.versionResponse.requestId];
            reject(new Error("CDP version needs to be 4.3 or newer."));
          }
        } else {
          if (this.storedPromises[data.versionResponse.requestId]) {
            const { resolve } = this.storedPromises[data.versionResponse.requestId];
            delete this.storedPromises[data.versionResponse.requestId];
            resolve(data.versionResponse.version);
          }
        }
        break;
      }

      case Container.Type.eSignalDataResponse: {
        const dataPoints = [];
        let index = 0;
        for (const row of data.signalDataResponse.row) {
          if (this.enableTimeSync) {
            data.signalDataResponse.criterion[index] += this.timeDiff;
          }
          const signalNames = [];
          for (const signalId of row.signalId) {
            signalNames.push(this.idToName[signalId]);
          }
          const value = this._createValue(
            signalNames,
            row.minValues,
            row.maxValues,
            row.lastValues
          );
          dataPoints.push({
            timestamp: data.signalDataResponse.criterion[index],
            value
          });
          index++;
        }
        if (this.storedPromises[data.signalDataResponse.requestId]) {
          const { resolve } = this.storedPromises[data.signalDataResponse.requestId];
          delete this.storedPromises[data.signalDataResponse.requestId];
          resolve(dataPoints);
        }
        break;
      }

      case Container.Type.eEventsResponse: {
        // Enrich events with a human-readable code description.
        if (data.eventsResponse.events && data.eventsResponse.events.length > 0) {
          data.eventsResponse.events.forEach(evt => {
            evt.codeDescription = this.getEventCodeDescription(evt.code);
          });
        }
        if (this.storedPromises[data.eventsResponse.requestId]) {
          const { resolve } = this.storedPromises[data.eventsResponse.requestId];
          delete this.storedPromises[data.eventsResponse.requestId];
          resolve(data.eventsResponse.events);
        }
        break;
      }

      default:
        console.error("Unknown message type", data.messageType);
    }
  }

  _convertTagMap(tagMapObj) {
    const result = {};
    if (!tagMapObj || !tagMapObj.tags) {
      return result;
    }
    for (const [tagKey, tagInfo] of Object.entries(tagMapObj.tags)) {
      result[tagKey] = {
        value: tagInfo.value,
        source: tagInfo.source
      };
    }
    return result;
  }

  _createValue(signalNames, minValues, maxValues, lastValues) {
    const value = {};
    for (let i = 0; i < signalNames.length; i++) {
      const signalType = this.nameToType[signalNames[i]] || CDPValueType.eDOUBLE;
      value[signalNames[i]] = {
        min: this._valueFromVariant(minValues[i], signalType),
        max: this._valueFromVariant(maxValues[i], signalType),
        last: this._valueFromVariant(lastValues[i], signalType)
      };
    }
    return value;
  }

  _valueFromVariant(variant, type) {
    if (!variant) return null;
    switch (type) {
      case CDPValueType.eDOUBLE:
        return variant.dValue;
      case CDPValueType.eFLOAT:
        return variant.fValue;
      case CDPValueType.eUINT64:
        return variant.ui64Value;
      case CDPValueType.eINT64:
        return variant.i64Value;
      case CDPValueType.eUINT:
        return variant.uiValue;
      case CDPValueType.eINT:
        return variant.iValue;
      case CDPValueType.eUSHORT:
        return variant.usValue;
      case CDPValueType.eSHORT:
        return variant.sValue;
      case CDPValueType.eUCHAR:
        return variant.ucValue;
      case CDPValueType.eCHAR:
        return variant.cValue;
      case CDPValueType.eBOOL:
        return variant.bValue;
      case CDPValueType.eSTRING:
        return variant.strValue;
      default:
        return null;
    }
  }

  _sendQueuedRequests() {
    for (const requestId in this.queuedRequests) {
      const req = this.queuedRequests[requestId];
      if (req === "logged_nodes") {
        this._sendLoggedNodesRequest(requestId);
      } else if (req === "log_limits") {
        this._sendLogLimitsRequest(requestId);
      } else if (Array.isArray(req) && req[0] === "node_values") {
        this._reqDataPoints(req[1], req[2], req[3], req[4], requestId);
      } else if (req === "api_version") {
        this._sendApiVersionRequest(requestId);
      } else if (req && req.type === "events") {
        this._sendEventsRequest(requestId, req.query);
      }
    }
    this.queuedRequests = {};
  }

  _getRequestId() {
    this.reqId += 1;
    return this.reqId;
  }

  _timeRequest() {
    if (!this.enableTimeSync) return;
    if ((Date.now() / 1000) > this.lastTimeRequest + 10) {
      this._updateTimeDiff();
    }
  }

  _updateTimeDiff() {
    if (!this.enableTimeSync) return;
    const requestId = this._getRequestId();
    const timeSent = Date.now() / 1000;
    this._requestTime(requestId)
      .then(timestamp => this._setTimeDiff(timestamp, timeSent))
      .catch(err => {
        if (this.storedPromises[requestId]) {
          this.storedPromises[requestId].reject(err);
        }
      });
  }

  _requestTime(reqId) {
    if (!this.enableTimeSync) {
      return Promise.resolve(0);
    }
    const requestId = reqId;
    this.lastTimeRequest = Date.now() / 1000;
    this._sendTimeRequest(requestId);
    const promise = new Promise((resolve, reject) => {
      this.storedPromises[requestId] = { resolve, reject };
    });
    return promise;
  }

  _sendTimeRequest(requestId) {
    const container = Container.create();
    container.messageType = Container.Type.eTimeRequest;
    container.timeRequest = { requestId };
    const buffer = Container.encode(container).finish();
    this.ws.send(buffer);
  }

  _setTimeDiff(timestamp, timeSent) {
    if (!this.enableTimeSync) return;
    const clientTime = this.timeReceived;
    const roundTripTime = clientTime - timeSent;
    const serverTime = (timestamp / 1e9) + roundTripTime / 2;
    const timeDiff = clientTime - serverTime;
    this.roundTripTimes[roundTripTime] = timeDiff;
    if (Object.keys(this.roundTripTimes).length !== 3) {
      this._updateTimeDiff();
    } else {
      const minRoundTrip = Math.min(...Object.keys(this.roundTripTimes).map(Number));
      this.timeDiff = this.roundTripTimes[minRoundTrip];
      this.roundTripTimes = {};
      if (!this.haveSentQueuedReq) {
        this._sendQueuedRequests();
        this.haveSentQueuedReq = true;
      }
    }
  }

  _sendLoggedNodesRequest(requestId) {
    const container = Container.create();
    container.messageType = Container.Type.eSignalInfoRequest;
    container.signalInfoRequest = { requestId };
    const buffer = Container.encode(container).finish();
    this.ws.send(buffer);
  }

  _sendLogLimitsRequest(requestId) {
    const container = Container.create();
    container.messageType = Container.Type.eCriterionLimitsRequest;
    container.criterionLimitsRequest = { requestId };
    const buffer = Container.encode(container).finish();
    this.ws.send(buffer);
  }

  _reqDataPoints(nodeNames, startS, endS, noOfDataPoints, requestId) {
    const _getDataPoints = (nodeIds) => {
      this._sendDataPointsRequest(nodeIds, startS, endS, requestId, noOfDataPoints);
    };

    const rejectRequest = (error) => {
      if (this.storedPromises[requestId]) {
        const { reject } = this.storedPromises[requestId];
        delete this.storedPromises[requestId];
        reject(error);
      }
    };

    if (!(endS < startS)) {
      this._requestNodeIds(nodeNames)
        .then(nodeIds => _getDataPoints(nodeIds))
        .catch(rejectRequest);
    } else {
      rejectRequest(new Error("InvalidRequestError on node values request: endS cannot be smaller than startS"));
    }
  }

  _requestNodeIds(nodeNames) {
    return new Promise((resolve, reject) => {
      const parseIds = () => {
        for (const name of nodeNames) {
          if (!(name in this.nameToId)) {
            reject(new Error("Node with name " + name + " does not exist."));
            return;
          }
        }
        resolve(nodeNames.map(name => this.nameToId[name]));
      };

      if (nodeNames.every(name => name in this.nameToId)) {
        parseIds();
      } else {
        this.requestLoggedNodes()
          .then(() => parseIds())
          .catch(reject);
      }
    });
  }

  _sendDataPointsRequest(nodeIds, startS, endS, requestId, noOfDataPoints) {
    const container = Container.create();
    container.messageType = Container.Type.eSignalDataRequest;
    container.signalDataRequest = {
      requestId,
      signalId: nodeIds,
      numOfDatapoints: noOfDataPoints,
      criterionMin: this.enableTimeSync ? (startS - this.timeDiff) : startS,
      criterionMax: this.enableTimeSync ? (endS - this.timeDiff) : endS
    };
    const buffer = Container.encode(container).finish();
    this.ws.send(buffer);
  }

  _sendApiVersionRequest(requestId) {
    const container = Container.create();
    container.messageType = Container.Type.eVersionRequest;
    container.versionRequest = { requestId };
    const buffer = Container.encode(container).finish();
    this.ws.send(buffer);
  }
}

module.exports = Client;
