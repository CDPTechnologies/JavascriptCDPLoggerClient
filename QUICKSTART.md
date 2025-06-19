# Quick Start Guide – CDPLogger Client

This guide demonstrates how to get started with the CDPLogger Client in both **Node.js** and **Browser** environments. The client automatically detects the environment and works seamlessly in both.

## Documentation

For documentation on the JS logger client see [DOCUMENTATION.md](DOCUMENTATION.md)

## Overview

The CDPLogger Client uses **automatic environment detection** to work in both Node.js and browser environments from a single source file:

- **Node.js:**
  - Automatically loads protobuf definitions using `require('./generated/containerPb.js')`
  - Uses the `ws` package for WebSocket functionality (installed as a dependency)
  - No manual setup required

- **Browser:**
  - Uses the browser's native WebSocket API
  - Expects protobuf definitions to be available at `window.root`
  - Requires including the containerPb.js script before the client

## Installation

### For Node.js

```bash
npm install cdplogger-client
```

### For Browser

Include the following scripts in your HTML:
- `protobuf.min.js` – for the ProtoBuf runtime.
- `containerPb.js` – which sets up `window.root` with your protobuf definitions
- `client.js` – the same file works in both Node.js and browser environments
- Instead of importing protobuf definitions via CommonJS, obtain them from the global scope:
   ```js
   const root = window.root;
   const Container = root.DBMessaging.Protobuf.Container;
   const CDPValueType = root.ICD.Protobuf.CDPValueType;
   const EventQuery = root.DBMessaging.Protobuf.EventQuery;
   ```

## Usage

### Node.js Example

```js
// Import the client
const cdplogger = require('cdplogger-client');

// Create a client instance (endpoint can be "127.0.0.1:17000" or "ws://127.0.0.1:17000")
const client = new cdplogger.Client('127.0.0.1:17000');

// List logged nodes (displaying name and routing information)
client.requestLoggedNodes().then(nodes => {
  nodes.forEach(node => {
    console.log(`Name: ${node.name}, Routing: ${node.routing}`);
  });
  
  // If we have nodes, request data points for the first one
  if (nodes.length > 0) {
    const nodeName = nodes[0].name;
    console.log(`\nRequesting data points for node: ${nodeName}`);
    
    // Get log limits and request data points
    client.requestLogLimits().then(limits => {
      return client.requestDataPoints([nodeName], limits.startS, limits.endS, 10, 0);
    }).then(dataPoints => {
      console.log(`\nReceived ${dataPoints.length} data points:`);
      dataPoints.forEach(point => {
        console.log(`Timestamp: ${new Date(point.timestamp * 1000).toISOString()}`);
        if (point.value && point.value[nodeName]) {
          const val = point.value[nodeName];
          console.log(`  Min: ${val.min}, Max: ${val.max}, Last: ${val.last}`);
        }
      });
    }).catch(err => {
      console.error("Error retrieving data points:", err);
    });
  }
});

// Disconnect after a short delay (for demonstration purposes)
setTimeout(() => {
  client.disconnect();
  process.exit(0);
}, 5000);
```

*The client automatically detects the Node.js environment and uses the `ws` package for WebSocket functionality.*

### Browser Example

Create an HTML file that includes the necessary scripts. For example:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>CDPLogger Client Quick Start</title>
    <!-- Include the protobuf runtime -->
    <script src="protobuf.min.js"></script>
    <!-- Include containerPb.js to set up global "root" -->
    <script src="containerPb.js"></script>
    <!-- Include client.js -->
    <script src="client.js"></script>
  </head>
  <body>
    <script>
      // Access protobuf definitions from global scope
      const root = window.root;
      const Container = root.DBMessaging.Protobuf.Container;
      const CDPValueType = root.ICD.Protobuf.CDPValueType;
      const EventQuery = root.DBMessaging.Protobuf.EventQuery;
      
      // The client is now available globally as "cdplogger" (attached to window)
      // Use window.location.hostname to connect to the same host as the web page
      const client = new cdplogger.Client(window.location.hostname + ":17000");

      // List logged nodes and output their names and routings
      client.requestLoggedNodes().then(nodes => {
        nodes.forEach(node => {
          console.log(`Name: ${node.name}, Routing: ${node.routing}`);
        });
        
        // If we have nodes, request data points for the first one
        if (nodes.length > 0) {
          const nodeName = nodes[0].name;
          console.log(`\nRequesting data points for node: ${nodeName}`);
          
          // Get log limits and request data points
          client.requestLogLimits().then(limits => {
            return client.requestDataPoints([nodeName], limits.startS, limits.endS, 10, 0);
          }).then(dataPoints => {
            console.log(`\nReceived ${dataPoints.length} data points:`);
            dataPoints.forEach(point => {
              console.log(`Timestamp: ${new Date(point.timestamp * 1000).toISOString()}`);
              if (point.value && point.value[nodeName]) {
                const val = point.value[nodeName];
                console.log(`  Min: ${val.min}, Max: ${val.max}, Last: ${val.last}`);
              }
            });
          }).catch(err => {
            console.error("Error retrieving data points:", err);
          });
        }
      });
    </script>
  </body>
</html>
```

*In the browser version, we use `window.location.hostname` to connect to the same host as the web page, with the default logger port 17000.*

## Prerequisites

- **CDP Studio:** Ensure a CDP Studio application is running with an active **CDPLogger** (or LogServer) on a known WebSocket port (e.g., 17000).
- **For Node.js:** No additional setup required - WebSocket support is automatically configured.
- **For Browser:** Ensure `containerPb.js` is available and sets up `window.root` with protobuf definitions.

## Learn More

- [Full README](https://github.com/CDPTechnologies/JavascriptCDPLoggerClient)
- [CDP Logger Documentation](https://cdpstudio.com/manual/cdp/cdplogger/cdplogger-configuration-manual.html)
