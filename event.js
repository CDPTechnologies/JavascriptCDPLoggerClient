// event.js
global.WebSocket = require('ws');
const Client = require('./client');
// NOTE: Event support is only on API version 4.0.0+

/**
 * Recursively normalizes an object/value.
 * If the value is a string, it trims whitespace.
 * If it's an object (or array), it normalizes each property.
 * This helps ensure that logically identical values produce the same string.
 *
 * @param {*} val - The value to normalize.
 * @returns {*} - The normalized value.
 */
function normalizeValue(val) {
  if (typeof val === 'string') {
    return val.trim();
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

(async function main() {
  const client = new Client('ws://127.0.0.1:17000', false);
  try {
    // Example query: adjust the time range, etc., as needed:
    const query = {
      timeRangeBegin: 1742540000,
      timeRangeEnd:   1742550000,
      codeMask:       0xFFFFFFFF,
      limit:          100,
      offset:         0,
      flags:          1  // 'NewestFirst' from your enum
    };

    const events = await client.requestEvents(query);

    // De-duplicate events using a composite key built from normalized fields.
    // We'll canonicalize e.data to handle reordered JSON keys.
    const seen = new Set();
    const uniqueEvents = [];

    for (const e of events) {
      const tsPart = (typeof e.timestampSec !== 'undefined' && e.timestampSec !== null)
        ? String(e.timestampSec)
        : '';

      const codePart = (typeof e.code !== 'undefined' && e.code !== null)
        ? String(e.code)
        : '';

      const senderPart = (typeof e.sender !== 'undefined' && e.sender !== null)
        ? String(e.sender)
        : '';

      // Canonicalize the data so that JSON field order does not matter
      const dataPart = e.data
        ? canonicalize(normalizeValue(e.data))
        : '';

      const compositeKey = `${tsPart}-${codePart}-${senderPart}-${dataPart}`;

      if (!seen.has(compositeKey)) {
        seen.add(compositeKey);
        uniqueEvents.push(e);
      }
    }

    // Print the unique events
    if (uniqueEvents.length === 0) {
      console.log("No events found.");
    } else {
      for (const evt of uniqueEvents) {
        console.log(`Timestamp: ${evt.timestampSec}`);
        console.log(`Code:      ${evt.code}`);
        console.log(`Sender:    ${evt.sender}`);
        console.log(`Data:      ${JSON.stringify(evt.data)}`);
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
