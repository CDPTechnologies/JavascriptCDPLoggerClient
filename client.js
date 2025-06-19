// Environment detection and dependency loading
let root;               // protobuf definitions
let WS;                 // WebSocket constructor

if (typeof window === 'undefined') {
  // ---- Node / CommonJS ----
  root = require('./generated/containerPb.js');
  WS   = global.WebSocket || require('ws');
  global.WebSocket = WS;              // make sure anything else sees it
} else {
  // ---- Browser ----
  root = window.root;                // injected by <script src="containerPb.js">
  WS   = window.WebSocket;
}

const Container = root.DBMessaging.Protobuf.Container;
const CDPValueType = root.ICD.Protobuf.CDPValueType;
const EventQuery = root.DBMessaging.Protobuf.EventQuery;


/**
 * A client for interacting with a CDP Logger or LogServer via WebSocket.
 * 
 * This client handles:
 * - Automatic reconnection (if enabled)
 * - Requesting and parsing responses for version, logged nodes, log limits, data points, and events
 * - Time synchronization between the client and the server
 */
class Client {
  // Defined property names to use instead of ambiguous numbers.
  static EventQueryFlags = Object.freeze({
    None: 0, // cdplogger.Client.EventQueryFlags.None === 0
    NewestFirst: 1,
    TimeRangeBeginExclusive: 2,
    TimeRangeEndExclusive: 4,
    UseLogStampForTimeRange: 8
  });

  static MatchType = Object.freeze({
    Exact: 0,
    Wildcard: 1
  });

  /**
   * Create a new Client instance to communicate with the logger.
   *
   * @param {string} endpoint - The logger endpoint (e.g. "127.0.0.1:17000" or "ws://127.0.0.1:17000").
   * @param {boolean} [autoReconnect=true] - Whether to automatically reconnect if the connection is lost.
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

    // Initialize the cache for sender tags and pending tag requests.
    this.senderTags = {};           // Cache for event sender tags (keyed by sender)
    this.pendingSenderTags = {};    // Holds pending promises for sender tags

    // Create the WebSocket connection
    this.ws = this._connect(url);
  }


  /**
   * Enable or disable time synchronization with the server.
   *
   * When enabled, the client automatically requests and calculates the time offset
   * (`timeDiff`) between the client and server to align timestamps. This can help
   * ensure data queries (e.g., requestDataPoints, requestEvents) are aligned with
   * the server's notion of time. Re-enabling time sync triggers a new offset
   * calculation on the next request or after a timeout. For an immediate sync,
   * call `_updateTimeDiff()` explicitly.
   *
   * @param {boolean} enable - True to enable, false to disable time sync.
   */
  setEnableTimeSync(enable) {
    this.enableTimeSync = enable;
    if (!enable) {
      // Cancel any pending time sync requests so they won't update timeDiff later.
      for (const key in this.storedPromises) {
        this.storedPromises[key].reject(new Error("Time sync disabled"));
      }
      this.storedPromises = {};
    }
  }

  /**
   * Disconnect from the server, closing the WebSocket connection.
   *
   * This also disables auto-reconnect and clears any queued or pending requests.
   * After calling `disconnect()`, you can create a new Client instance to 
   * re-establish a connection.
   */
  disconnect() {
    this.autoReconnect = false;
    this._cleanupQueuedRequests();
    this.isOpen = false;
    if (this.ws) {
      this.ws.close();
    }
  }

  // --- Public API methods ---

  /**
   * Request the API version from the connected CDP Logger or LogServer.
   * 
   * In CDP Studio, this corresponds to the version of the CDP runtime 
   * or the logger server that you are connecting to. The version can be used 
   * to ensure compatibility with certain features.
   *
   *   Version History:
   * - 3.0 (2017-08, CDP 4.3): Minimum supported version.
   * - 3.1 (2020-08, CDP 4.9):
   *     - Support for reading full resolution data by setting noOfDataPoints to 0.
   *     - Added a limit argument to data point requests (behaves like SQL LIMIT, where 0 means no limit).
   *     - The server now notifies of dropped queries by returning a TooManyRequests error
   *       when too many pending requests exist.
   * - 3.2 (2022-11, CDP 4.11): Limits queries to 50,000 rows to avoid overloading the logger app;
   *     larger data sets should be downloaded in patches.
   * - 4.0 (2024-01, CDP 4.12):
   *     - Added NodeTag support to save custom tags for logged values (e.g. Unit or Description),
   *       accessible via the client's API.
   *     - Reduced network usage by having data responses only include changes instead of repeating unchanged values.
   *     - Added support for string values and events.
   *
   * @returns {Promise<string>} A promise that resolves with the version string
   *   (e.g., "4.5.2"). If the version is below 3.0, the promise is rejected with
   *   an error indicating an incompatible version.
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
   *
   * In CDP Studio, this corresponds to the "LoggedValues" table of the 
   * CDPLogger component. The returned list includes node 
   * names, paths, and any associated tags that might be assigned to 
   * those nodes.
   *
   * @returns {Promise<Array>} A promise that resolves with an array of 
   *   node objects. Each object includes:
   *   - `name`    (string): The node name
   *   - `routing` (string): The node path
   *   - `tags`    (object): Optional key/value pairs providing additional 
   *       node metadata
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
   * Request the log limits (start and end times of available data).
   *
   * In CDP Studio, this corresponds to the earliest and latest times 
   * for which log data is available in the CDPLogger (or LogServer).
   *
   * @returns {Promise<Object>} A promise that resolves with an object
   *   containing:
   *   - `startS` (number): The earliest available timestamp (in seconds).
   *   - `endS`   (number): The latest available timestamp (in seconds).
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
   * Request data points for the specified node names over a given time range.
   *
   * This retrieves time-series data from the logged nodes
   * (CDP signals, arguments, properties and other value nodes) in the specified range. The number of data points is
   * adjustable, allowing for either raw or decimated data.
   *
   * @param {Array<string>} nodeNames - The names of the nodes/signals to retrieve.
   * @param {number} startS - The start time (in seconds since epoch).
   * @param {number} endS - The end time (in seconds since epoch).
   * @param {number} noOfDataPoints - The maximum number of data points to retrieve.
   *   - If you specify a nonzero value, the server will decimate or downsample
   *     the data to roughly that many points across [startS..endS].
   *   - If you set it to 0, the server returns the data at full resolution
   *     (i.e., no decimation).
   * @param {number} limit - Similar to SQL LIMIT. It allows you to request data 
   *    in batches by setting the maximum batch size (the number of samples). 
   *    Note, reading data in larger batches will improve performance but also allocate more memory.
   * @returns {Promise<Array>} A promise that resolves with an array of objects,
   *   where each object has:
   *   - `timestamp` (number): The time (in seconds) for the data row.
   *   - `value` (object): A key-value mapping of node names to an object with
   *       `min`, `max`, and `last` properties representing the node's values
   *       at that timestamp.
   */
  requestDataPoints(nodeNames, startS, endS, noOfDataPoints, limit) {
    this._timeRequest();
    const requestId = this._getRequestId();
    const promise = new Promise((resolve, reject) => {
      this.storedPromises[requestId] = { resolve, reject };
    });
    if (!this.isOpen) {
      this.queuedRequests[requestId] = ["node_values", nodeNames, startS, endS, noOfDataPoints, limit];
    } else {
      this._reqDataPoints(nodeNames, startS, endS, noOfDataPoints, limit, requestId);
    }
    return promise;
  }

  /**
   * Request events based on the provided query parameters.
   *
   * In CDP Studio, this corresponds to event log queries for the
   * CDPLogger (or LogServer). The query parameters allow filtering by
   * sender, data fields, code masks, and time ranges, among others.
   *
   * The `query.flags` field uses bitmask values similar to an enum:
   *   0 = None  
   *   1 = NewestFirst  
   *   2 = TimeRangeBeginExclusive  
   *   4 = TimeRangeEndExclusive  
   *   8 = UseLogStampForTimeRange  
   * 
   *   For additional information:
   *   https://cdpstudio.com/manual/cdp/cdp2sql/logmanager-eventquery.html#Flags-enum
   *   https://cdpstudio.com/manual/cdp/cdplogger/eventlogreader.html#cdp-event-code-flags
   *
   * Allowed query keys:
   * - timeRangeBegin (number)
   * - timeRangeEnd (number)
   * - limit (number)
   * - offset (number)
   * - codeMask (number)
   * - flags (number)
   * - senderConditions (array)
   * - dataConditions (object)
   *
   * Each event object typically includes the following fields:
   *  - `sender` (string): The event sender.
   *  - `data` (object): An object containing event-specific details:
   *       - `Text` (string): The event text message.
   *       - `Level` (string): The event level (e.g., "ERROR").
   *       - `Description` (string): A detailed description of the event.
   *       - `Group` (string): A group identifier for the event.
   *  - `timestampSec` (number): The timestamp (in seconds) when the event occurred.
   *  - `id` (string): A unique identifier for the event.
   *  - `code` (number): The raw event code returned by the server.
   *  - `status` (number): The status code associated with the event.
   *  - `logstampSec` (number): The log timestamp (in seconds) when the event was logged.
   * 
   * Example usage:
   * client.requestEvents({
   *   timeRangeBegin: 1609459200,
   *   timeRangeEnd: 1609545600,
   *   senderConditions: ["CDPLoggerDemoApp.InvalidLicense"],
   *   dataConditions: {
   *     Text: ["Invalid or missing feature license detected."],
   *     // Multiple data conditions can be specified:
   *     Level: { value: "ERROR", matchType: cdplogger.Client.MatchType.Exact }
   *   },
   *   limit: 100,
   *   offset: 0,
   *   flags: cdplogger.Client.EventQueryFlags.NewestFirst
   * });
   * 
   * @param {Object} query - A simple plain object representing the EventQuery.
   * @returns {Promise<Array>} Resolves with an array of event objects.
   */
  // Modified requestEvents() to wait for missing sender tag info.
  requestEvents(query) {
    this._timeRequest();
    const requestId = this._getRequestId();
    const eventQuery = this._buildEventQuery(query);
    if (!this.isOpen) {
      this.queuedRequests[requestId] = { type: "events", query: eventQuery };
    } else {
      this._sendEventsRequest(requestId, eventQuery);
    }
    return new Promise((resolve, reject) => {
      this.storedPromises[requestId] = { resolve, reject };
    })
      .then(events => {
        // Collect the unique sender names from events that lack cached tags.
        const missingSenders = Array.from(new Set(
          events
            .filter(evt => !this.senderTags[evt.sender])
            .map(evt => evt.sender)
        ));

        if (missingSenders.length === 0) {
          return events;
        }
        // Request tag info for all missing senders.
        return Promise.all(
          missingSenders.map(sender => this.getSenderTags(sender))
        ).then(() => {
          // Attach tags to events after tag info is available.
          events.forEach(evt => {
            evt.tags = this.senderTags[evt.sender];
          });
          return events;
        });
      });
  }

  /**
   * Request a count of events that match the given query.
   *
   * The query object accepts the same keys as in requestEvents().
   *
   * @param {Object} query - The event query object.
   * @returns {Promise<number>} A promise that resolves with the count of events.
   */
  countEvents(query) {
    this._timeRequest();
    const requestId = this._getRequestId();
    const eventQuery = this._buildEventQuery(query);
    if (!this.isOpen) {
      this.queuedRequests[requestId] = { type: "countEvents", query: eventQuery };
    } else {
      this._sendCountEventsRequest(requestId, eventQuery);
    }
    return new Promise((resolve, reject) => {
      this.storedPromises[requestId] = { resolve, reject };
    });
  }

  /**
   * Converts a numeric CDP event code into a descriptive string,
   * combining multiple flags if needed.
   *
   * Common codes (from the docs):
   *   0x1        = AlarmSet
   *   0x2        = AlarmClr
   *   0x4        = AlarmAck
   *   0x40       = AlarmReprise
   *   0x100      = SourceObjectUnavailable
   *   0x40000000 = NodeBoot
   *
   * @param {number} code - The event code from an events response.
   * @returns {string} - A human-readable combination of flags, 
   *   such as "AlarmSet + SourceObjectUnavailable".
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

  /**
   * Returns a human‐readable string for a given event code.
   * If multiple flags are set, it attempts to identify known
   * combinations; otherwise, it combines them with a plus sign.
   *
   * @param {number} code - The numeric event code.
   * @returns {string} - The corresponding event code string.
   */
  getEventCodeString(code) {
    if (code === 0) return "";
    const EventCodeFlags = {
      AlarmSet: 0x1,
      AlarmClr: 0x2,
      AlarmAck: 0x4,
      AlarmReprise: 0x40,
      SourceObjectUnavailable: 0x100,
      NodeBoot: 0x40000000
    };

    // Check for specific single-flag codes or two-flag combos
    if (code === EventCodeFlags.AlarmSet) return "AlarmSet";
    if (code === EventCodeFlags.AlarmClr) return "AlarmClear";
    if (code === EventCodeFlags.AlarmAck) return "Ack";
    if (code === EventCodeFlags.AlarmReprise) return "Reprise";
    if (code === (EventCodeFlags.AlarmReprise | EventCodeFlags.AlarmSet))
      return "RepriseAlarmSet";
    if (code === (EventCodeFlags.AlarmReprise | EventCodeFlags.AlarmClr))
      return "RepriseAlarmClear";
    if (code === (EventCodeFlags.AlarmReprise | EventCodeFlags.AlarmAck))
      return "RepriseAck";

    // Otherwise, combine the flag strings based on which bits are set
    let s = "";
    if (code & EventCodeFlags.AlarmReprise)
      s += (s ? "+" : "") + "Reprise";
    if (code & EventCodeFlags.AlarmSet)
      s += (s ? "+" : "") + "AlarmSet";
    if (code & EventCodeFlags.AlarmClr)
      s += (s ? "+" : "") + "AlarmClear";
    if (code & EventCodeFlags.AlarmAck)
      s += (s ? "+" : "") + "Ack";
    if (code & EventCodeFlags.NodeBoot)
      s += (s ? "+" : "") + "EventNodeBoot";
    if (code & EventCodeFlags.SourceObjectUnavailable)
      s += (s ? "+" : "") + "SourceObjectUnavailable";

    return s;
  }

  /**
   * Retrieves the tags associated with a given sender.
   *
   * This method checks if the tags for the specified sender are already cached. If so, it returns a 
   * resolved promise with the cached tags. Otherwise, it initializes a pending promise for the sender,
   * sends a request for the sender's tags using `_sendEventSenderTagsRequest`, and returns a promise that
   * resolves when the tags are received.
   *
   * @param {string} sender - The identifier of the event sender.
   * @returns {Promise<Object>} A promise that resolves with an object representing the tags for the sender.
   */
  getSenderTags(sender) {
    if (this.senderTags && this.senderTags[sender]) {
      return Promise.resolve(this.senderTags[sender]);
    }
    // If no pending promise for this sender, initialize one and trigger a request.
    if (!this.pendingSenderTags[sender]) {
      this.pendingSenderTags[sender] = [];
      this._sendEventSenderTagsRequest(sender);
    }
    return new Promise((resolve, reject) => {
      this.pendingSenderTags[sender].push({ resolve, reject });
    });
  }


  // --- Internal methods ---

  _connect(url) {
    const ws = new WS(url);
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
    // Reject all stored promises.
    for (const key in this.storedPromises) {
      this.storedPromises[key].reject(error);
    }
    this.storedPromises = {};
    this.queuedRequests = {};
    
    // Reject any pending sender tag promises.
    for (const sender in this.pendingSenderTags) {
      this.pendingSenderTags[sender].forEach(promiseObj => promiseObj.reject(error));
      delete this.pendingSenderTags[sender];
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

  _cleanupQueuedRequests() {
    for (const key in this.storedPromises) {
      this.storedPromises[key].reject(new Error("Connection was closed"));
    }
    this.storedPromises = {};
    this.queuedRequests = {};
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
            // If we already have cached tags for this sender, attach them;
            // otherwise, request them.
            if (this.senderTags && this.senderTags[evt.sender]) {
              evt.tags = this.senderTags[evt.sender];
            } else {
              // Request sender tags asynchronously.
              this._sendEventSenderTagsRequest(evt.sender);
            }
          });
        }
        if (this.storedPromises[data.eventsResponse.requestId]) {
          const { resolve } = this.storedPromises[data.eventsResponse.requestId];
          delete this.storedPromises[data.eventsResponse.requestId];
          resolve(data.eventsResponse.events);
        }
        break;
      }


      case Container.Type.eCountEventsResponse: {
        if (this.storedPromises[data.countEventsResponse.requestId]) {
          const { resolve } = this.storedPromises[data.countEventsResponse.requestId];
          delete this.storedPromises[data.countEventsResponse.requestId];
          resolve(data.countEventsResponse.count);
        }
        break;
      }

      case Container.Type.eEventSenderTagsResponse: {
        // Get the mapping of sender names to TagMap objects.
        const tagsMapping = data.eventSenderTagsResponse.senderTags;
        // Iterate over each sender in the mapping.
        for (const sender in tagsMapping) {
          const tags = this._convertTagMap(tagsMapping[sender]);
          this.senderTags[sender] = tags;
          // Resolve any pending promises waiting for tags for this sender.
          if (this.pendingSenderTags[sender]) {
            this.pendingSenderTags[sender].forEach(promiseObj => promiseObj.resolve(tags));
            delete this.pendingSenderTags[sender];
          }
        }
        break;
      }


      default:
        console.error("Unknown message type", data.messageType);
    }
  }

  _convertTagMap(tagMapObj) {
    const result = {};
    if (!tagMapObj) return result;
    // If the tag map is nested under 'tags', use that; otherwise, use tagMapObj directly.
    const entries = tagMapObj.tags || tagMapObj;
    for (const [tagKey, tagInfo] of Object.entries(entries)) {
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
      if (minValues.length === 0 || maxValues.length === 0) {
        // Server does not send min and max when they are equal to last
        const last = this._valueFromVariant(lastValues[i], signalType);
        value[signalNames[i]] = {
          min: last,
          max: last,
          last: last
        };
      } else {
        value[signalNames[i]] = {
          min: this._valueFromVariant(minValues[i], signalType),
          max: this._valueFromVariant(maxValues[i], signalType),
          last: this._valueFromVariant(lastValues[i], signalType)
        };
      }
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
        this._reqDataPoints(req[1], req[2], req[3], req[4], req[5], requestId);
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

  _reqDataPoints(nodeNames, startS, endS, noOfDataPoints, limit, requestId) {
    const _getDataPoints = (nodeIds) => {
      this._sendDataPointsRequest(nodeIds, startS, endS, requestId, noOfDataPoints, limit);
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

  _sendDataPointsRequest(nodeIds, startS, endS, requestId, noOfDataPoints, limit) {
    const container = Container.create();
    container.messageType = Container.Type.eSignalDataRequest;
    container.signalDataRequest = {
      requestId,
      signalId: nodeIds,
      limit,
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

  _sendEventsRequest(requestId, query) {
    const container = Container.create();
    container.messageType = Container.Type.eEventsRequest;
    container.eventsRequest = { requestId, query };
    const buffer = Container.encode(container).finish();
    this.ws.send(buffer);
  }

  _sendCountEventsRequest(requestId, query) {
    const container = Container.create();
    container.messageType = Container.Type.eCountEventsRequest;
    container.countEventsRequest = { requestId, query };
    const buffer = Container.encode(container).finish();
    this.ws.send(buffer);
  }

  _sendEventSenderTagsRequest(sender) {
    const container = Container.create();
    container.messageType = Container.Type.eEventSenderTagsRequest;
    // Use a new requestId so the server can reply with a proper EventSenderTagsResponse.
    container.eventSenderTagsRequest = { requestId: this._getRequestId(), sender };
    const buffer = Container.encode(container).finish();
    this.ws.send(buffer);
  }

  /**
   * Helper method to validate the event query object.
   *
   * Allowed keys:
   *  - timeRangeBegin (number)
   *  - timeRangeEnd (number)
   *  - limit (number)
   *  - offset (number)
   *  - codeMask (number)
   *  - flags (number)
   *  - senderConditions (array)
   *  - dataConditions (object)
   *
   * @param {Object} query - The event query object provided by the user.
   * @throws {Error} If the query contains invalid property names or incorrect types.
   */
  _validateEventQuery(query) {
    const allowedKeys = {
      timeRangeBegin: 'number',
      timeRangeEnd: 'number',
      limit: 'number',
      offset: 'number',
      codeMask: 'number',
      flags: 'number',
      senderConditions: 'array',
      dataConditions: 'object'
    };

    Object.keys(query).forEach(key => {
      if (!allowedKeys.hasOwnProperty(key)) {
        throw new Error(
          `Invalid property "${key}" in event query. Allowed properties are: ${Object.keys(allowedKeys).join(', ')}.`
        );
      }
      const expectedType = allowedKeys[key];
      if (expectedType === 'number' && typeof query[key] !== 'number') {
        throw new Error(`Property "${key}" must be a number.`);
      }
      if (expectedType === 'array' && !Array.isArray(query[key])) {
        throw new Error(`Property "${key}" must be an array.`);
      }
      if (expectedType === 'object' && (typeof query[key] !== 'object' || query[key] === null || Array.isArray(query[key]))) {
        throw new Error(`Property "${key}" must be an object.`);
      }
    });
  }

  /**
   * Helper method to build a proper EventQuery object from a simple plain object.
   *
   * The returned query object is used by `requestEvents()` to query 
   * the CDPLogger or LogServer for matching events.
   *
   * @param {Object} query - The simple plain object query.
   * @returns {DBMessaging.Protobuf.EventQuery} - The structured EventQuery.
   * @throws {Error} If a condition object is missing required properties.
   */
  _buildEventQuery(query) {
    // Validate the query object before building the EventQuery.
    this._validateEventQuery(query);

    // Conditionally include these fields only if the user has set them
    const optionalFields = [
      "timeRangeBegin",
      "timeRangeEnd",
      "codeMask",
      "limit",
      "offset",
      "flags"
    ];

    // Build a base query object that includes only the fields provided
    const baseQuery = {};
    optionalFields.forEach(field => {
      if (query[field] !== undefined) {
        baseQuery[field] = query[field];
      }
    });

    // Build senderConditions if present
    if (query.senderConditions && query.senderConditions.length > 0) {
      baseQuery.senderConditions = {
        conditions: query.senderConditions.map(condition => {
          if (typeof condition === 'object' && condition !== null) {
            if (!('value' in condition)) {
              throw new Error(
                `Sender condition object must include a 'value' property. Received: ${JSON.stringify(condition)}`
              );
            }
            return {
              value: String(condition.value),
              type: condition.matchType !== undefined
                ? condition.matchType
                : Client.MatchType.Wildcard
            };
          } else {
            return {
              value: condition,
              type: Client.MatchType.Wildcard
            };
          }
        })
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
            if (typeof item === 'object' && item !== null) {
              if (!('value' in item)) {
                throw new Error(
                  `Data condition for key "${key}" must include a 'value' property. Received: ${JSON.stringify(item)}`
                );
              }
              conditions.push({
                value: String(item.value),
                type: item.matchType !== undefined
                  ? item.matchType
                  : Client.MatchType.Wildcard
              });
            } else {
              conditions.push({
                value: String(item),
                type: Client.MatchType.Wildcard
              });
            }
          }
        } else if (typeof val === 'object' && val !== null) {
          if (!('value' in val)) {
            throw new Error(
              `Data condition for key "${key}" must include a 'value' property. Received: ${JSON.stringify(val)}`
            );
          }
          conditions.push({
            value: String(val.value),
            type: val.matchType !== undefined
              ? val.matchType
              : Client.MatchType.Wildcard
          });
        } else {
          conditions.push({
            value: String(val),
            type: Client.MatchType.Wildcard
          });
        }

        dataConds[key] = { conditions };
      }
      baseQuery.dataConditions = dataConds;
    }

    return EventQuery.create(baseQuery);
  }
}

// Export the module
const cdplogger = {};
cdplogger.Client = Client;

// For Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = cdplogger;
}
// For Browser
else if (typeof window !== 'undefined') {
  window.cdplogger = cdplogger;
}
