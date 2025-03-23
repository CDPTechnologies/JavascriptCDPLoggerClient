// index.js
// Example demonstration including an events query for a specific time range (UTC 9:40)

global.WebSocket = require('ws');
const Client = require('./client');

// Print the node information (name, routing, and tags)
function printLoggedNodes() {
  client.requestLoggedNodes()
    .then(nodes => {
      console.log("Connected nodes:");
      nodes.forEach(node => {
        console.log(`Name: ${node.name}, Routing: ${node.routing}`);
        if (node.tags) {
          console.log("Tags:");
          Object.entries(node.tags).forEach(([key, tagInfo]) => {
            console.log(`  ${key}: value=${tagInfo.value}, source=${tagInfo.source}`);
          });
        }
        console.log('--------------------');
      });
    })
    .catch(err => {
      console.error("Error retrieving logged nodes:", err);
    });
}

// Print data points for the "Output" node.
async function printDataPoints() {
  try {
    const limits = await client.requestLogLimits();
    console.log("Log limits received:", limits);

    const dataPoints = await client.requestDataPoints(["Output"], limits.startS, limits.endS, 25);
    console.log("Data Points retrieved:");
    dataPoints.forEach(point => {
      console.log(`Timestamp: ${point.timestamp}`);
      if (point.value && point.value["Output"]) {
        const val = point.value["Output"];
        console.log(`Min: ${val.min}`);
        console.log(`Max: ${val.max}`);
        console.log(`Last: ${val.last}`);
      } else {
        console.log("No data for 'Output':", point);
      }
      console.log('--------------------');
    });
  } catch (err) {
    console.error("Error retrieving data points:", err);
  }
}

// Print events retrieved within a time range corresponding to UTC 9:40.
// In this example, we use a 5-minute window starting at UTC 9:40.
async function printEvents() {
  try {
    // Specify the target time for events in UTC.
    // Adjust the date as needed; here we assume a specific date.
    const targetDate = new Date("2025-03-21T09:38:00Z");
    const targetTime = targetDate.getTime() / 1000;
    // Define a window of 5 minutes (300 seconds)
    const timeWindow = 5 * 60;

    const eventQuery = {
      timeRangeBegin: targetTime,
      timeRangeEnd: targetTime + timeWindow,
      codeMask: 0,
      limit: 100,
      offset: 0,
      flags: 0,
      // Optionally, add senderConditions or dataConditions if desired.
    };

    const events = await client.requestEvents(eventQuery);
    console.log("Events retrieved:");
    if (!events || events.length === 0) {
      console.log("No events found with the current query.");
    } else {
      events.forEach(evt => {
        console.log(`Timestamp: ${evt.timestampSec}`);
        console.log(`  Code:   ${evt.data && evt.data.Code ? evt.data.Code : "N/A"}`);
        console.log(`  Source: ${evt.data && evt.data.Source ? evt.data.Source : "N/A"}`);
        console.log(`  Text:   ${evt.data && evt.data.Text ? evt.data.Text : "N/A"}`);
        console.log('--------------------');
      });
    }
  } catch (err) {
    console.error("Error retrieving events:", err);
  }
}

async function main() {
  try {
    printLoggedNodes();
    await printDataPoints();
    await printEvents();
  } catch (error) {
    console.error("Error in main:", error);
  } finally {
    client.disconnect();
    process.exit(0);
  }
}

// Create a new client instance. (In this example, autoReconnect is disabled.)
const client = new Client('ws://127.0.0.1:17000', false);

// Instead of overriding ws.onopen (which may cancel internal logic),
// add an event listener so that _onOpen is still called.
client.ws.addEventListener("open", () => {
  console.log("WebSocket connection established.");
  main();
});
