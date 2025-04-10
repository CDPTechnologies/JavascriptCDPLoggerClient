# CDP Logger Client

A JavaScript client for reading historic data from systems created with the CDP Studio development platform. 
For more information about CDP Studio, see https://cdpstudio.com/.
For more information about CDP Logger, see https://cdpstudio.com/manual/cdp/cdplogger/cdplogger-index.html.

This client allows you to:
- Connect to a CDP Logger or LogServer component
- Request logged nodes and their metadata
- Retrieve data points for specific nodes
- Query events from the logger
- Get log limits and API version information

## Installation

```bash
npm install cdplogger-client
```

## Quick Start

For a quick introduction, see the [QUICKSTART.md](QUICKSTART.md) guide.

## Documentation

For detailed documentation, see [DOCUMENTATION.md](DOCUMENTATION.md).

## Usage

### Node.js

```javascript
const cdplogger = require('cdplogger-client');
global.WebSocket = require('ws');

const client = new cdplogger.Client('127.0.0.1:17000');

// List logged nodes
client.requestLoggedNodes().then(nodes => {
  console.log("Available nodes:", nodes);
});
```

### Browser

```html
<script src="protobuf.min.js"></script>
<script src="containerPb.js"></script>
<script src="client.js"></script>
<script>
  const client = new cdplogger.Client(window.location.hostname + ":17000");
  
  client.requestLoggedNodes().then(nodes => {
    console.log("Available nodes:", nodes);
  });
</script>
```

## Contact

Email: support@cdptech.com

## License

MIT