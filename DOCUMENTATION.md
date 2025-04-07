# JavaScript CDP Logger Client

**JavaScript CDP Logger Client** is an open-source library for interfacing with CDP Studio applications that use the **CDP Logger** component. It allows you to monitor and retrieve historical data (logged signal values) and system events from a running CDP application via WebSocket. The library works in both Node.js and browser environments (e.g. it can be integrated into a Vue.js frontend) and requires a CDP Logger server to be running in your CDP Studio system.

## Quickstart

For a quickstart guide, see the [QUICKSTART.md](QUICKSTART.md) file.

## Overview and Purpose

In **CDP Studio**, the CDP Logger component is responsible for logging selected values (signals) and events from your system for long-term storage ([Framework - Data Logging](https://cdpstudio.com/manual/cdp/cdplogger/cdplogger-index.html#:~:text=The%20CDP%20Logger%20is%20a,file%20or%20a%20remote%20server)). This client library connects to that CDP Logger (or an external LogServer) over WebSocket and uses CDP’s protobuf-based API to query the logged data. The purpose of the library is to provide an easy JavaScript interface to: 

- List what signals are being logged (and their metadata)
- Read historical data points for those signals (e.g. for plotting trends)
- Retrieve logged events from the system (with filtering options)
- Handle connection details like reconnection and time synchronization

By using this library, developers can build dashboards, monitoring tools, or scripts that interact with a live CDP system’s historical data **without** needing to manually handle low-level WebSocket messaging or protobuf encoding. This README will guide you through the features, setup, and usage of the library.

## Key Features

- **Connect to CDP Logger via WebSocket:** Easily connect to a running CDP Logger or LogServer by specifying its host/port (e.g. `ws://127.0.0.1:17000`). The client handles establishing the WebSocket connection and managing message encoding/decoding.

- **Retrieve Logged Values:** Query the list of logged signals (nodes) from the CDP Logger (equivalent to the Logger’s *LoggedValues* table in CDP Studio). Each logged node entry includes its name, full path (routing), and any associated tags/metadata (like engineering unit or description). You can also request historical data points for one or multiple signals over a time range. For example, you can fetch a downsampled series of values between a start and end timestamp, or even full-resolution data if needed.

- **Event Logging and Querying:** Fetch historical **events** logged by the CDP Logger. By default, CDP Logger captures all system events ([How to Setup Logging in Automation System | Framework - Data Logging](https://cdpstudio.com/manual/cdp/cdplogger/cdplogger-configuration-example.html#:~:text=The%20CDP%20Logger%20is%20a,for%20logging%20a%20sine%20signal)), and this client allows you to query those events with powerful filtering options. You can filter by event sender (source component), by event data fields (supports wildcard matching on text fields), by event codes or severity, and by time ranges. The API provides methods to either count events matching a query or retrieve the event details. Retrieved events include timestamp, sender, event data (which may be structured data or messages), and tags (metadata) for the event source.

- **Tag Support:** Supports **Node Tags** for logged values and event sender tags. If your CDP system defines custom tags (metadata) for signals (e.g. unit, description) or for event sources, the client will fetch and include this information in the results. For example, when you list logged nodes via this client, you’ll get any custom tag values (and their source) associated with each node. This was introduced in newer CDP versions (CDP 4.12 / API v4.0) and is fully supported by the library.

- **Time Synchronization:** The client automatically synchronizes time with the server to account for clock drift. On each data or event query, it can perform a quick time exchange with the server to calculate the offset (`timeDiff`) between the client’s clock and the CDP Logger’s clock. This ensures that timestamp-based queries (for data points or events) align correctly with the logger’s timeline. Time sync is enabled by default and can be toggled on/off in case you want to use the client’s local time only.

- **Automatic Reconnection:** If the WebSocket connection drops, the client can automatically attempt to reconnect (this is enabled by default). Upon reconnect, it will also resend any pending requests that were queued while the connection was down, so your application can recover seamlessly from transient network issues. You can disable auto-reconnect by passing `autoReconnect=false` when creating the client if you prefer to handle disconnections manually.

- **Node.js and Browser Support:** The library is designed to work in Node.js (for back-end scripts or services) as well as in the browser (front-end web applications). In Node.js, it uses the popular `ws` package for WebSocket support, and in browsers it uses the native `WebSocket` API. The codebase is written in plain JavaScript, and a usage example with **Vue.js** is provided to demonstrate integration in a web UI (see below).

- **Built on Protocol Buffers:** Communication with the CDP Logger uses Protocol Buffers (protobuf) messages defined by CDP. This library includes the necessary protobuf definitions (for container messages, data requests/responses, event queries, etc.), using the [`protobufjs`](https://www.npmjs.com/package/protobufjs) library under the hood. You don’t need to manually deal with proto files – the library handles serialization and parsing of messages into easy-to-use JavaScript objects.

- **Logging API Version Support:** The client is compatible with CDP Logger API version 3.0 and above (CDP 4.3+). It implements newer API features such as event querying and node tags (available in API v4.0, CDP 4.12) while maintaining backward compatibility with the core functions from earlier versions. You can always check the logger’s API version by calling `client.requestApiVersion()` to ensure the server supports certain features.

## Installation

### Via npm

You can install the library from npm:

```bash
npm install cdp-logger-client
```

This will add the CDP Logger client to your project’s dependencies. The package bundles the necessary JavaScript files and protobuf definitions. The only peer dependency you might need is a WebSocket implementation if you are using Node.js (see **Prerequisites** and **Usage in Node.js** below).

### In Browser (direct script include)

If you are not using a module bundler and prefer to include the library via `<script>` tags in an HTML page, you can do so by including the compiled scripts. You will need:

1. **ProtoBuf JS library** – include the ProtoBuf runtime (for example, via CDN or the provided `protobuf.min.js`). This is required for decoding the binary messages.
2. **CDP Logger protobuf definitions** – include the `containerPb.js` script which defines the protobuf messages used by CDP Logger (this comes with the library).
3. **The CDP Logger Client code** – include `client.js` (or a minified bundle of it). This defines the global `cdplogger` object with the Client class.

Include these in the `<head>` or `<body>` of your HTML in the above order. For example:

```html
<!-- ProtoBuf library -->
<script src="https://cdn.jsdelivr.net/npm/protobufjs@7.x/dist/minimal/protobuf.min.js"></script>
<!-- CDP Logger protobuf definitions (comes with this library) -->
<script src="path/to/containerPb.js"></script>
<!-- CDP Logger Client library -->
<script src="path/to/client.js"></script>
```

Once these are included, a global object `cdplogger` will be available, through which you can create a client and use the API (as shown in the usage examples below).

## Prerequisites

Before using the CDP Logger Client, make sure you have the following:

- **CDP Studio and a Running CDP Application** – You need a CDP Studio project/application running that includes a **CDPLogger** component (or a standalone **LogServer**) configured to log data. Ensure that the logger is active and has a network port open for the WebSocket connections. Typically, the CDP Logger’s server port is configured in the CDP Studio project (for example, it might default to 17000, but confirm in your project settings). The application should also have some signals added to the logger’s Logged Values, otherwise there’s no data to retrieve. *(See CDP Studio’s documentation on how to add signals to the logger, e.g. by right-clicking a signal and selecting “Add to Logger” ([How to Setup Logging in Automation System | Framework - Data Logging](https://cdpstudio.com/manual/cdp/cdplogger/cdplogger-configuration-example.html#:~:text=)).)* Also, if you want to retrieve events, ensure that **Event Logging** is enabled on the CDP Logger (it is true by default ([Event Logging](https://cdpstudio.com/manual/cdp/cdplogger/cdplogger-configuration-manual.html#event-logging))).

- **Node.js environment (for Node usage)** – If you plan to use this library in Node.js, you should have Node.js installed. Additionally, because Node does not have a built-in WebSocket, you will need to install a WebSocket library. We suggest using [`ws`](https://www.npmjs.com/package/ws), which the client has been tested with. In a Node context, you will instruct the client to use `ws` by assigning it to the global WebSocket (shown below).

- **Modern Web Browser (for browser usage)** – If using in a web frontend, ensure you are using a reasonably modern browser that supports WebSockets (virtually all modern browsers do) and ES6 features. The library does not require any special polyfills aside from including the ProtoBuf runtime as mentioned. The Vue.js example provided assumes an environment where you can run ES2015+ code.

- **ProtoBuf JS** – The library depends on `protobufjs` (included as an npm dependency). If you installed via npm and are using a bundler or Node, this will be installed automatically. If you are using direct script includes, include the `protobuf.min.js` as shown above.

- **CDP Logger API Compatibility** – As noted, the target CDP Logger should be running a version that supports the queries you need. Basic data queries work on older versions (3.0+), but features like tags and advanced event filtering require newer CDP releases (CDP 4.12 for tags support, etc.). If you’re running an older CDP version and some API calls fail or are not supported, consider upgrading CDP Studio or limiting to the supported features.

## Setup and Configuration

Below we detail how to set up and use the CDP Logger Client in both Node.js and browser environments, with code examples.

### Using the Client in Node.js

In Node.js, you will typically import (or require) the library and set up a WebSocket polyfill, then create a client instance pointing to your CDP Logger’s address.

**Example (Node.js):**

```js
// 1. Install and import the CDP Logger Client
const cdplogger = require('cdp-logger-client');

// 2. Set up WebSocket for Node (since Node has no native WebSocket)
global.WebSocket = require('ws');  // ensure 'ws' is installed in your project

// 3. Create a client instance connecting to the logger endpoint
//    Replace the host and port with your CDP Logger's address.
const client = new cdplogger.Client('127.0.0.1:17000'); 

// 4. Use the client to query data. For example, get the logger version:
client.requestApiVersion()
  .then(version => {
    console.log("CDP Logger API Version:", version);
    // E.g., might print "CDP Logger API Version: 4.0.0"
  })
  .catch(err => {
    console.error("Failed to get API version:", err);
  });

// 5. Query the list of logged nodes (signals) and print their names:
client.requestLoggedNodes()
  .then(nodes => {
    console.log("Logged Nodes:");
    nodes.forEach(node => {
      console.log(`- ${node.name} (Path: ${node.routing})`);
      if (node.tags) {
        // If tags are available (CDP 4.12+), print those as well
        Object.entries(node.tags).forEach(([tagName, tagInfo]) => {
          console.log(`   Tag "${tagName}": ${tagInfo.value} (source: ${tagInfo.source})`);
        });
      }
    });
  })
  .catch(err => {
    console.error("Error retrieving logged nodes:", err);
  });
```

A few notes on the above example:

- The `Client` constructor takes the logger endpoint. You can provide it as `"host:port"` (as a string) or a full WebSocket URL (`"ws://host:port"` or `"wss://host:port"` for secure). If the `ws://` prefix is omitted, the library will prepend it automatically. In the example, `'127.0.0.1:17000'` becomes `ws://127.0.0.1:17000`.

- We set `global.WebSocket = require('ws')` **before** creating the client. The library will use the global `WebSocket` class to establish the connection. In a Node environment, `ws` provides this. (If you forget to do this, you might get a reference error or no connection, since by default the code expects `window.WebSocket` in a browser or a global WebSocket in Node.)

- The client connects immediately upon instantiation. It will attempt to open the WebSocket and, if `autoReconnect` is true (default), keep trying if the connection is refused or lost. You can check `client.isOpen` to see if the connection is currently open. In the example, we simply make requests; if the socket isn’t open yet, the library will queue the requests and send them once connected.

- The API calls like `requestApiVersion()`, `requestLoggedNodes()` return Promises. You can also use `async/await` if you prefer. For instance, `const nodes = await client.requestLoggedNodes().catch(console.error);` inside an `async` function.

- The `requestLoggedNodes()` call returns an array of node info objects. Each object has at least `{ name: string, routing: string }` and possibly a `tags` object if tags are supported and fetched. The `tags` object is a dictionary of tagName -> `{ value: any, source: string }`. For example, a node could have `node.tags.Unit = { value: "°C", source: "CDPStudio" }` indicating the engineering unit is degrees Celsius.

You can also request historical **data points** for one or more signals using `client.requestDataPoints(names, startTimeSec, endTimeSec, numberOfPoints)`. For example:

```js
// Assume we got `limits` from requestLogLimits (which provides start and end of log):
const limits = await client.requestLogLimits();
const start = limits.startS;
const end   = limits.endS;
// Request 100 data points for signals "Temperature" and "Pressure" over the full range
const dataPoints = await client.requestDataPoints(["Temperature", "Pressure"], start, end, 100);
dataPoints.forEach(point => {
  console.log("Timestamp:", point.timestamp);
  // Each point.value will contain an object with keys for each signal name:
  // e.g., point.value["Temperature"] = { min: ..., max: ..., last: ... }
  const tempData = point.value["Temperature"];
  if (tempData) {
    console.log(` Temperature -> min: ${tempData.min}, max: ${tempData.max}, last: ${tempData.last}`);
  }
  const pressData = point.value["Pressure"];
  if (pressData) {
    console.log(` Pressure -> min: ${pressData.min}, max: ${pressData.max}, last: ${pressData.last}`);
  }
});
```

The above demonstrates retrieving 100 aggregated data points between the earliest and latest logged times. Each data point might represent an interval of time within the range, with `min`, `max`, and `last` values of the signal during that interval (this is how the CDP Logger provides downsampled data). If you instead want full resolution data, you can specify `numberOfPoints = 0` to get all points (be careful with performance if the range is large). You can also specify a `limit` (max number of points) separate from the number of intervals, as well as request specific aggregation methods.

Finally, to retrieve **events**, you can use `client.requestEvents(query)` along with constructing a query object. You can also use `client.countEvents(query)` to just get the count. Here’s a brief Node example for events:

```js
const query = {
  senderConditions: [
    { value: "MyApp.AlarmManager", matchType: MatchType.Exact }
  ],
  dataConditions: {
    // Assume events have a field "Text" and we want those containing "Overheat"
    Text: ["Overheat*"]  // '*' wildcard is the default option
  },
  timeRangeStart: Date.now()/1000 - 24*3600,  // (optional) last 24 hours in seconds (if time filtering desired)
  limit: 50,      // max 50 events
  offset: 0,      // start from the first match
  flags: EventQueryFlags.NewestFirst  // get newest events first
};

const totalMatching = await client.countEvents(query);
console.log(`There are ${totalMatching} events matching the query conditions.`);
const events = await client.requestEvents(query);
events.forEach(evt => {
  console.log(`Event at ${evt.timestampSec} from ${evt.sender}:`, evt.data);
  if (evt.tags) {
    console.log("  Sender tags:", evt.tags);
  }
});
```

In this example, we filter events whose sender matches "MyApp.AlarmManager*" and whose text contains "Overheat". We retrieve up to 50 of the most recent such events. Each `evt` has properties like `timestampSec` (epoch time), `sender` (string identifier of the source), `data` (often an object or message describing the event), and `tags` (metadata about the sender, if available). The `EventQueryFlags` and `MatchType` static enums are provided by the library to refine queries (e.g., `Wildcard` vs `Exact` matching). See the CDP Logger documentation for full details on event query parameters ([Event Query](https://cdpstudio.com/manual/cdp/cdp2sql/logmanager-eventquery.html)).

When you are done with the client (in Node or browser), you can call `client.disconnect()` to close the WebSocket and stop any automatic reconnection attempts. In Node scripts that are meant to exit, make sure to call `disconnect()` or `process.exit()` after your queries finish, otherwise the process may stay alive waiting for the socket to close.

### Using the Client in a Browser

Using the client in a browser is similar, except you don’t need to polyfill WebSocket (browsers have it natively) and you will access the library via the global `cdplogger` (if included via `<script>` tag) or via an ES module import (if using a bundler). 

**Example (Browser with script includes):**

```html
<!-- Include scripts as described in Installation -->
<script src="protobuf.min.js"></script>
<script src="containerPb.js"></script>
<script src="client.js"></script>

<script>
  // Once scripts are loaded, use the global cdplogger
  const client = new cdplogger.Client("ws://localhost:17000");  // connect to logger
  
  // Example: fetch API version
  client.requestApiVersion().then(version => {
    console.log("Connected to CDP Logger, version:", version);
  });
  
  // Example: fetch logged nodes and display in console
  client.requestLoggedNodes().then(nodes => {
    console.log("Logged values available:", nodes.map(n => n.name));
  });
  
  // You could then use this data to, for instance, populate a UI or chart.
</script>
```

As shown, the usage is very much the same as in Node. The `cdplogger.Client` class is the main entry point. In a browser context, you might integrate this with UI components or state management. For example, in a Vue.js app, you might call these client methods in a Vuex store or inside component lifecycle hooks to retrieve data and then render charts (as demonstrated in the included Vue example). The provided `model.js` (in this repository’s examples) shows a more involved integration: it uses the client to load historical data for multiple sensors and plot them using Chart.js, and to fetch events (like alarms) to display in a list. You can refer to that for inspiration on how to bind the data to a frontend.

A few browser-specific notes:

- **Security:** If your CDP Logger is served over HTTPS (or you are accessing it from an HTTPS page), use `wss://` for the WebSocket URL to avoid mixed content issues. Ensure the CDP Logger is configured with TLS if needed. For local testing with `http://localhost` you can use `ws://` without issues.

- **CORS/WebSocket Policy:** WebSocket connections are not subject to the same-origin policy in the way XHR/Fetch are, but some environments might still require the server to accept the connection. The CDP Logger’s WebSocket server should accept connections from any origin by default. If you encounter issues connecting from a web page, check if any firewall or network configuration is blocking the websocket port.

- **Performance:** Retrieving a lot of data points or events in one go can be heavy for the browser. If you plan to visualize large data sets, consider using pagination (e.g., request events 100 at a time using `offset`) or downsampling data points via the `numberOfPoints` parameter. The library itself streams the data efficiently, but rendering thousands of points in the DOM can be slow, so plan accordingly.

## How to Run Tests

This project includes a set of unit tests and simulation scripts to ensure the client works as expected. Tests are written using **Jest**.

After you clone the repository and install dependencies (`npm install`), you can run the test suite with:

```bash
npm test
```

This will run all the Jest tests. The tests cover various client behaviors, such as message parsing, time synchronization logic, and error handling. 

One notable test utility is the **time synchronization simulation** found in `tests/testTimeSync.js`. This script creates a dummy WebSocket (without a real server) and simulates responses to test how the client calculates the `timeDiff` between client and server clocks. It overrides the client’s internal methods to inject fake time responses and prints out the results for verification. You can run this script manually (e.g., `node tests/testTimeSync.js`) to see a step-by-step log of time sync in action. The script will output logs showing the time difference calculations with time sync **enabled vs disabled**, helping validate that the mechanism works correctly.

When contributing to the project (or if you modify the code), please run `npm test` to ensure all tests still pass. If you add new features, adding corresponding tests is highly appreciated.

## Contribution Guidelines

Contributions are welcome! If you have an idea for improvement or have found a bug, please open an issue on the GitHub repository to discuss it. If you’d like to contribute code or documentation:

1. **Fork the repository** on GitHub and create a new branch for your changes.
2. Make your changes in your fork. If adding a feature or fixing a bug, try to add or update unit tests to cover your change.
3. Ensure the code style remains consistent with the project (we use common JavaScript best practices; if the project has an ESLint configuration, please run it).
4. Run the test suite (`npm test`) to confirm all tests pass.
5. Commit your changes with clear commit messages.
6. **Open a Pull Request** to the main repository, describing the changes and the motivation. The maintainers will review your PR and merge it after any discussions or adjustments.

For significant changes, it’s often good to discuss in an issue first to ensure the change aligns with the project goals. We aim to keep the library lightweight and focused on CDP Logger interactions.

Also, make sure any contributions you submit are your own work and that you’re okay with releasing them under the project’s MIT license.

## License

This project is open-source software licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details. This means you are free to use, modify, and distribute this library in your own projects, even commercial ones, provided you include the copyright notice and license text in any redistribution. 

## Resources and Helpful Links

- **CDP Studio Documentation – CDP Logger:** To understand the context and capabilities of the CDP Logger component, see the official CDP Studio documentation. The CDP Logger is described as a component for logging values and events for long-term storage. You can read more in the CDP Studio Manual under *Framework - Data Logging*. (Visit the [CDP Studio Docs website](https://cdpstudio.com/manual/cdp/cdplogger/cdplogger-index.html).

- **CDP Studio Official Website:** For more information about CDP Studio in general (the development environment, features, downloads, etc.), visit the [official CDP Studio website](https://cdpstudio.com). This site contains tutorials, user manuals, and other resources to help you get started with building applications in CDP Studio.

- **Example Project:** For a complete example of how to use the CDP Logger Client in a Web environment Vue.js project, see the [Adding a Vue.js Web GUI to Automation System](https://cdpstudio.com/manual/cdp/examples/webui-demo.html).

- **GitHub Repository (Source Code):** You can find the source code for this library, report issues, and see example code on the project’s GitHub page: [CDPTechnologies/JavascriptCDPLoggerClient](https://github.com/CDPTechnologies/JavascriptCDPLoggerClient). Feel free to star the repo and watch for updates. All development and issue tracking is done through GitHub.

- **Contact (Support):** If you have questions or need help with the library, you can reach out to the maintainers via the CDP Technologies support email: **support@cdptech.com**. We encourage you to use the issue tracker on GitHub for bug reports and feature requests, but for direct support inquiries, email is available.

---

*Thank you for using the JavaScript CDP Logger Client!* We hope this library makes it easier to integrate CDP Studio’s powerful logging capabilities into your own tools and applications. ([GitHub - CDPTechnologies/JavascriptCDPLoggerClient: A simple Javascript interface to communicate with CDP applications containing a CDPLogger component to retrieve historic data.](https://github.com/CDPTechnologies/JavascriptCDPLoggerClient#:~:text=A%20simple%20JavaScript%20interface%20for,com))