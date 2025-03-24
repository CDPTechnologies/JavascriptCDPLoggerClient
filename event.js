// event.js
global.WebSocket = require('ws');
const Client = require('./client');
// NOTE: Event support is only on API version 4.0.0+

/**
 * Recursively normalizes an object/value.
 * If the value is a string, it trims whitespace and compresses internal whitespace.
 * If it's an object (or array), it normalizes each property.
 * This helps ensure that logically identical values produce the same string.
 *
 * @param {*} val - The value to normalize.
 * @returns {*} - The normalized value.
 */
function normalizeValue(val) {
  if (typeof val === 'string') {
    return val.trim().replace(/\s+/g, ' ');
  } else if (typeof val === 'object' && val !== null) {
    if (Array.isArray(val)) {
      return val.map(normalizeValue);
    } else {
      const keys = Object.keys(val).sort();
      const normalized = {};
      for (const key of keys) {
        normalized[key.trim()] = normalizeValue(val[key]);
      }
      return normalized;
    }
  }
  return val;
}

/**
 * Recursively returns a canonical JSON string for the given object.
 * Keys are sorted so that two objects with the same properties produce the same string.
 *
 * @param {*} obj - The object/value to canonicalize.
 * @returns {string} - The canonical JSON string.
 */
function canonicalize(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return JSON.stringify(obj);
  }
  if (Array.isArray(obj)) {
    return '[' + obj.map(canonicalize).join(',') + ']';
  }
  const keys = Object.keys(obj).sort();
  const result = keys
    .map(key => JSON.stringify(key) + ':' + canonicalize(obj[key]))
    .join(',');
  return '{' + result + '}';
}

/**
 * Orders the keys of an object based on a desired order.
 * Keys in the desiredOrder array appear first (in that order) and any remaining keys
 * are appended in alphabetical order.
 *
 * @param {Object} obj - The object whose keys are to be ordered.
 * @returns {Object} - A new object with keys in the desired order.
 */
function orderObjectKeys(obj) {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return obj;
  }
  // Define your desired key order
  const desiredOrder = ["Level", "Group", "Description", "Text"];
  const ordered = {};

  // Add keys in the desired order if they exist in the object
  for (const key of desiredOrder) {
    if (key in obj) {
      ordered[key] = obj[key];
    }
  }

  // Get any keys not in the desired order and sort them alphabetically
  const remainingKeys = Object.keys(obj)
    .filter(key => !desiredOrder.includes(key))
    .sort();

  for (const key of remainingKeys) {
    ordered[key] = obj[key];
  }
  return ordered;
}

(async function main() {
  const client = new Client('ws://127.0.0.1:17000', false);
  try {
    // Wide time range and large limit
    const query = {
      timeRangeBegin: 0,            // start from the epoch
      timeRangeEnd:   2147483647,     // far in the future
      codeMask:       0xFFFFFFFF,     // all codes
      limit:          1000,           // max number of events to retrieve
      offset:         0,
      flags:          1               // e.g. 'NewestFirst'
    };

    const events = await client.requestEvents(query);

    // -----------------------------------------------------------------------
    // Deduplicate events:
    // Use only the sender and the event's data (after normalizing and ordering)
    // to build a composite key. This ignores differences in timestamp, code,
    // or JSON key order.
    // -----------------------------------------------------------------------
    const seen = new Set();
    const uniqueEvents = [];

    for (const e of events) {
      const senderPart = (typeof e.sender === 'string') ? e.sender : '';

      // Process the data: normalize, then order the keys
      let dataPart = '';
      if (e.data) {
        const normalizedData = normalizeValue(e.data);
        const orderedData = orderObjectKeys(normalizedData);
        dataPart = canonicalize(orderedData);
      }

      // Build composite key from sender and data only
      const compositeKey = `${senderPart}-${dataPart}`;

      if (!seen.has(compositeKey)) {
        seen.add(compositeKey);
        uniqueEvents.push(e);
      }
    }

    // Print the final unique events, with data keys ordered for display
    if (uniqueEvents.length === 0) {
      console.log("No events found (after dedup).");
    } else {
      console.log(`Showing ${uniqueEvents.length} unique events:\n`);
      for (const evt of uniqueEvents) {
        console.log(`Timestamp: ${evt.timestampSec}`);
        console.log(`Code:      ${evt.code}`);
        console.log(`Sender:    ${evt.sender}`);
        let orderedData = evt.data;
        if (typeof evt.data === 'object' && evt.data !== null && !Array.isArray(evt.data)) {
          orderedData = orderObjectKeys(evt.data);
        }
        console.log(`Data:      ${JSON.stringify(orderedData)}`);
        console.log('--------------------');
      }
    }
  } catch (err) {
    console.error("Error retrieving events:", err);
  } finally {
    client.disconnect();
    process.exit(0);
  }
})();
