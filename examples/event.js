// event.js
global.WebSocket = require('ws');
const Client = require('../client');
// NOTE: Event support is only on API version 4.0.0+

(async function main() {
  const client = new Client('ws://127.0.0.1:17000', false);
  try {
    // Wide time range and large limit
    const query = {
      timeRangeBegin: 0,          // start from the epoch
      timeRangeEnd:   2147483647, // far in the future
      codeMask:       0xFFFFFFFF, // all codes
      limit:          50,         // max number of events to retrieve
      offset:         0,
      flags:          1           // e.g. 'NewestFirst'
    };

    const events = await client.requestEvents(query);

    // Print events directly (no deduplication or normalization)
    if (events.length === 0) {
      console.log("No events found.");
    } else {
      console.log(`Showing ${events.length} events:\n`);
      for (const evt of events) {
        console.log(`Timestamp: ${evt.timestampSec}`);
        // Now we show the numeric code and the human-readable description:
        console.log(`Code:      ${evt.code} (${evt.codeDescription})`);
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
