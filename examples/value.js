// index.js
// Example demonstration including an events query for a specific time range (UTC 9:40)

global.WebSocket = require('ws');
const cdplogger = require('../client');

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


async function main() {
  try {
    printLoggedNodes();
    await printDataPoints();
  } catch (error) {
    console.error("Error in main:", error);
  } finally {
    client.disconnect();
    process.exit(0);
  }
}

// Create a new client instance. (In this example, autoReconnect is disabled.)
const client = new cdplogger.Client('ws://127.0.0.1:17000', false);

// Instead of overriding ws.onopen (which may cancel internal logic),
// add an event listener so that _onOpen is still called.
client.ws.addEventListener("open", () => {
  console.log("WebSocket connection established.");
  main();
});
