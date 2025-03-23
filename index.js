// index.js
global.WebSocket = require('ws');
const Client = require('./client');

const client = new Client('127.0.0.1', 17000, false);

// Print the node information (name and routing)
function printLoggedNodes() {
  client.requestLoggedNodes()
    .then(nodes => {
      console.log("Connected nodes:");
      nodes.forEach(node => {
        console.log(`Name: ${node.name}, Routing: ${node.routing}`);
      });
      console.log('--------------------');
    })
    .catch(err => {
      console.error("Error retrieving logged nodes:", err);
    });
}

function onDataPointsReceived(dataPoints) {
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
  // When finished processing, disconnect and exit
  setTimeout(() => {
    client.disconnect();
    process.exit(0);
  }, 5000);
}

function requestDataPoints(limits) {
  console.log("Log limits received:", limits);
  return client.requestDataPoints(["Output"], limits.start_s, limits.end_s, 25);
}

function onError(error) {
  console.error("Error:", error);
}

// Kick off both the nodes request and data points request:
printLoggedNodes();
client.requestLogLimits()
  .then(requestDataPoints)
  .then(onDataPointsReceived)
  .catch(onError);
