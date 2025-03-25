// event.js
global.WebSocket = require('ws');
const Client = require('../client');
// NOTE: Event support is only on API version 4.0.0+

const { DBMessaging } = require('../generated/containerPb');

/**
 * Helper: Create an exact match condition for filtering.
 * Uses the EventQuery.Condition message.
 */
function createExactCondition(value) {
  return DBMessaging.Protobuf.EventQuery.Condition.create({
    value: value,
    type: DBMessaging.Protobuf.EventQuery.MatchType.Exact // 0
  });
}

/**
 * Helper: Create a ConditionList from an array of conditions.
 */
function createConditionList(conditions) {
  return DBMessaging.Protobuf.EventQuery.ConditionList.create({
    conditions: conditions
  });
}

/**
 * Helper: Create sender conditions.
 * @param {Array<string>} senders - Array of exact-match sender names.
 * @param {Array<string>} senderPatterns - Array of wildcard patterns.
 * @returns {DBMessaging.Protobuf.EventQuery.ConditionList}
 */
function createSenderConditions(senders = [], senderPatterns = []) {
  const conditions = [
    ...senders.map(sender => createExactCondition(sender)),
    ...senderPatterns.map(pattern =>
      DBMessaging.Protobuf.EventQuery.Condition.create({
        value: pattern,
        type: DBMessaging.Protobuf.EventQuery.MatchType.Wildcard // 1
      })
    )
  ];
  return createConditionList(conditions);
}

/**
 * Helper: Create data conditions.
 * @param {Object} dataConditions - Map of data field keys to values (or arrays of values)
 * @returns {Object} - Map of field name to ConditionList
 */
function createDataConditions(dataConditions = {}) {
  const result = {};
  for (const [key, value] of Object.entries(dataConditions)) {
    let conditions;
    if (Array.isArray(value)) {
      conditions = value.map(v => {
        if (typeof v === "string" && (v.includes("*") || v.includes("?"))) {
          return DBMessaging.Protobuf.EventQuery.Condition.create({
            value: v,
            type: DBMessaging.Protobuf.EventQuery.MatchType.Wildcard
          });
        } else {
          return createExactCondition(String(v));
        }
      });
    } else {
      if (typeof value === "string" && (value.includes("*") || value.includes("?"))) {
        conditions = [
          DBMessaging.Protobuf.EventQuery.Condition.create({
            value: value,
            type: DBMessaging.Protobuf.EventQuery.MatchType.Wildcard
          })
        ];
      } else {
        conditions = [createExactCondition(String(value))];
      }
    }
    result[key] = createConditionList(conditions);
  }
  return result;
}

/**
 * Create an EventQuery message.
 * @param {Object} options - Options for filtering.
 * @returns {DBMessaging.Protobuf.EventQuery}
 */
function createEventQuery(options = {}) {
  const queryObj = {
    timeRangeBegin: options.timeRangeBegin || 0,
    timeRangeEnd: options.timeRangeEnd || 2147483647,
    codeMask: options.codeMask !== undefined ? options.codeMask : 0xFFFFFFFF,
    limit: options.limit || 20,
    offset: options.offset || 0,
    flags: options.flags || 1
  };

  if ((options.senders && options.senders.length) || (options.senderPatterns && options.senderPatterns.length)) {
    queryObj.senderConditions = createSenderConditions(options.senders || [], options.senderPatterns || []);
  }
  if (options.dataConditions && Object.keys(options.dataConditions).length > 0) {
    queryObj.dataConditions = createDataConditions(options.dataConditions);
  }
  return DBMessaging.Protobuf.EventQuery.create(queryObj);
}

/**
 * Format an event for display.
 */
function formatEvent(evt) {
  return `
Timestamp: ${evt.timestampSec}
Code:      ${evt.code} (${evt.codeDescription})
Sender:    ${evt.sender}
Data:      ${JSON.stringify(evt.data)}
--------------------`;
}

(async function main() {
  const client = new Client('ws://127.0.0.1:17000', false);
  try {
    // Wait a moment for the connection to establish.
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("----- Example: Combined Server‑Side Filtering (Sender + Data) -----");
    // Build a query that combines both conditions.
    const combinedQuery = createEventQuery({
      senders: ["CDPLoggerDemoApp.InvalidLicense"],
      dataConditions: {
        "Text": "Invalid or missing feature license detected."
      }
    });
    const combinedEvents = await client.requestEvents(combinedQuery);
    console.log(`Showing ${combinedEvents.length} events matching both conditions:`);
    combinedEvents.forEach(evt => console.log(formatEvent(evt)));

  } catch (err) {
    console.error("Error retrieving events:", err);
  } finally {
    client.disconnect();
    process.exit(0);
  }
})();
