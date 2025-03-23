// Example: client.js
const root = require('./generated/containerPb.js');
const Container = root.DBMessaging.Protobuf.Container;

class Client {
  constructor(host, port = 17000, autoReconnect = true) {
    this.reqId = -1;
    this.autoReconnect = autoReconnect;
    this.isOpen = false;
    this.queuedRequests = {};
    this.storedPromises = {};
    this.nameToId = {};
    this.idToName = {};
    this.timeDiff = 0;
    this.timeReceived = null;
    this.lastTimeRequest = Date.now() / 1000;
    this.haveSentQueuedReq = false;
    this.roundTripTimes = {};
    this.ws = this._connect(`ws://${host}:${port}`);
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
    this._updateTimeDiff();
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


  _handleMessage(ws, message) {
    // console.log("Raw data:", message);
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
      case Container.Type.eSignalInfoResponse:
        const nodes = [];
        this.nameToId = {};
        this.idToName = {};
        for (let i = 0; i < data.signalInfoResponse.name.length; i++) {
          const node = {
            name: data.signalInfoResponse.name[i],
            routing: data.signalInfoResponse.path[i]
          };
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
      case Container.Type.eCriterionLimitsResponse:
        data.criterionLimitsResponse.criterionMin += this.timeDiff;
        data.criterionLimitsResponse.criterionMax += this.timeDiff;
        const limits = {
          start_s: data.criterionLimitsResponse.criterionMin,
          end_s: data.criterionLimitsResponse.criterionMax
        };
        if (this.storedPromises[data.criterionLimitsResponse.requestId]) {
          const { resolve } = this.storedPromises[data.criterionLimitsResponse.requestId];
          delete this.storedPromises[data.criterionLimitsResponse.requestId];
          resolve(limits);
        }
        break;
      case Container.Type.eVersionResponse:
        const version = parseFloat(data.versionResponse.version);
        if (version < 3.0) {
          if (this.storedPromises[data.versionResponse.requestId]) {
            const { reject } = this.storedPromises[data.versionResponse.requestId];
            delete this.storedPromises[data.versionResponse.requestId];
            reject(new Error("CDP version needs to be 3.0 or newer."));
          }
        } else {
          if (this.storedPromises[data.versionResponse.requestId]) {
            const { resolve } = this.storedPromises[data.versionResponse.requestId];
            delete this.storedPromises[data.versionResponse.requestId];
            resolve(data.versionResponse.version);
          }
        }
        break;
      case Container.Type.eSignalDataResponse:
        let dataPoints = [];
        let index = 0;
        for (const row of data.signalDataResponse.row) {
          data.signalDataResponse.criterion[index] += this.timeDiff;
          let signalNames = [];
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
            value: value
          });
          index++;
        }
        if (this.storedPromises[data.signalDataResponse.requestId]) {
          const { resolve } = this.storedPromises[data.signalDataResponse.requestId];
          delete this.storedPromises[data.signalDataResponse.requestId];
          resolve(dataPoints);
        }
        break;
      default:
        console.error("Unknown message type", data.messageType);
    }
  }

  _createValue(signalNames, minValues, maxValues, lastValues) {
    const value = {};
    for (let i = 0; i < signalNames.length; i++) {
      value[signalNames[i]] = {
        min: this._valueFromVariant(minValues[i]),
        max: this._valueFromVariant(maxValues[i]),
        last: this._valueFromVariant(lastValues[i])
      };
    }
    return value;
  }

  _valueFromVariant(value) {
    if (value.dValue !== undefined) return value.dValue;
    if (value.fValue !== undefined) return value.fValue;
    if (value.ui64Value !== undefined) return value.ui64Value;
    if (value.i64Value !== undefined) return value.i64Value;
    if (value.uiValue !== undefined) return value.uiValue;
    if (value.iValue !== undefined) return value.iValue;
    if (value.usValue !== undefined) return value.usValue;
    if (value.sValue !== undefined) return value.sValue;
    if (value.ucValue !== undefined) return value.ucValue;
    if (value.cValue !== undefined) return value.cValue;
    if (value.bValue !== undefined) return value.bValue;
    if (value.strValue !== undefined) return value.strValue;
    return null;
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
      }
    }
    this.queuedRequests = {};
  }

  _getRequestId() {
    this.reqId += 1;
    return this.reqId;
  }

  _timeRequest() {
    if ((Date.now() / 1000) > this.lastTimeRequest + 10) {
      this._updateTimeDiff();
    }
  }

  _updateTimeDiff() {
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
    const requestId = reqId;
    this.lastTimeRequest = Date.now() / 1000;
    this._sendTimeRequest(requestId);
    return new Promise((resolve, reject) => {
      this.storedPromises[requestId] = { resolve, reject };
    });
  }

  _sendTimeRequest(requestId) {
    // Create a Container message for time request
    const container = Container.create();
    container.messageType = Container.Type.eTimeRequest;
    container.timeRequest = { requestId: requestId };
    const buffer = Container.encode(container).finish();
    this.ws.send(buffer);
  }

  _setTimeDiff(timestamp, timeSent) {
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
    container.signalInfoRequest = { requestId: requestId };
    const buffer = Container.encode(container).finish();
    this.ws.send(buffer);
  }

  _sendLogLimitsRequest(requestId) {
    const container = Container.create();
    container.messageType = Container.Type.eCriterionLimitsRequest;
    container.criterionLimitsRequest = { requestId: requestId };
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
      requestId: requestId,
      signalId: nodeIds,
      numOfDatapoints: noOfDataPoints,
      criterionMin: startS - this.timeDiff,
      criterionMax: endS - this.timeDiff
    };
    const buffer = Container.encode(container).finish();
    this.ws.send(buffer);
  }

  _sendApiVersionRequest(requestId) {
    const container = Container.create();
    container.messageType = Container.Type.eVersionRequest;
    container.versionRequest = { requestId: requestId };
    const buffer = Container.encode(container).finish();
    this.ws.send(buffer);
  }
}

module.exports = Client;
