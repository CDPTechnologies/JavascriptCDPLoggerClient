# Quick Start Guide – CDPLogger Client

This guide demonstrates how to get started with the CDPLogger Client in both **Node.js** and **Browser** environments. Note that the client module must be built differently for each target environment.

## Documentation

For documentation on the JS logger client see [DOCUMENTATION.md](DOCUMENTATION.md)

## Overview

- **Node.js Version:**
  - Uses CommonJS modules (imported via `require()`).
  - Loads protobuf definitions from local files (e.g. from `./generated/containerPb.js`).
  - Requires a WebSocket polyfill (such as the `ws` package) since Node.js lacks a native WebSocket.

- **Browser Version:**
  - Uses the browser's native WebSocket.
  - Obtains protobuf definitions from the global scope via `window.root` (set by including `containerPb.js`).

## Installation

### For Node.js

Install the CDPLogger Client and a WebSocket polyfill (for the Node.js version):

```bash
npm install cdp-logger-client ws
```

### For Browser

Include the following scripts in your HTML:
- `protobuf.min.js` – for the ProtoBuf runtime.
- `containerPb.js` – which sets up `window.root` with your protobuf definitions.
- The web version of `client.js` – which should include the web-specific modifications (see the "Adapting client.js for Web Support" section below).

## Adapting client.js for Web Support

To enable web support, ensure your `client.js` file includes these modifications:

1. **Use the Browser's Native WebSocket:**  
   In the web version, remove or comment out any code that requires a WebSocket polyfill. For example:
   ```js
   // const WebSocket = require('ws'); // Do not use this in the browser
   ```
   
2. **Use Global Protobuf Definitions:**  
   Instead of importing protobuf definitions via CommonJS, obtain them from the global scope:
   ```js
   // For Node.js, you might load:
   // const root = require('./generated/containerPb.js');
   // For Browser, use the global "root" defined by containerPb.js:
   const root = window.root;
   const Container = root.DBMessaging.Protobuf.Container;
   const CDPValueType = root.ICD.Protobuf.CDPValueType;
   const EventQuery = root.DBMessaging.Protobuf.EventQuery;
   ```
   
3. **Expose the Client Globally:**  
   At the end of your `client.js`, attach the client API to the global window:
   ```js
   cdplogger.Client = Client;
   window.cdplogger = cdplogger;
   ```
   This ensures that when `client.js` is loaded in a browser, the `cdplogger` object (and its `Client` class) is available globally.

*Make sure these modifications are only applied for the browser version of your client module.*

## Usage

### Node.js Example

```js
// Import the client and set up the WebSocket polyfill
const cdplogger = require('cdp-logger-client');
global.WebSocket = require('ws');

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

*In the Node.js version, the module is imported using `require()`, and the WebSocket polyfill is provided by the `ws` package.*

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
    <!-- Include client.js (the web version with browser-specific modifications) -->
    <script src="client.js"></script>
  </head>
  <body>
    <script>
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
- **For Node.js:** Install the `ws` package as a WebSocket polyfill.

## Learn More

- [Full README](https://github.com/CDPTechnologies/JavascriptCDPLoggerClient)
- [CDP Logger Documentation](https://cdpstudio.com/manual/cdp/cdplogger/cdplogger-configuration-manual.html)
