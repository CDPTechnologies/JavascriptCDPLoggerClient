// Example demonstration
global.WebSocket = require('ws');
const Client = require('./client');

// Create a new client, disabling autoReconnect (false)
const client = new Client('ws://127.0.0.1:17000', false);

// Print the node information (name, routing, and tags)
function printLoggedNodes() {
  client.requestLoggedNodes()
    .then(nodes => {
      console.log("Connected nodes:");
      nodes.forEach(node => {
        // Basic node info
        console.log(`Name: ${node.name}, Routing: ${node.routing}`);
        
        // If tags are available, then log them
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
  // Request data for the node named "Output" within the retrieved time limits
  return client.requestDataPoints(["Output"], limits.startS, limits.endS, 25);
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
