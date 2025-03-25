# CDPLogger Client for JavaScript

A simple JavaScript interface for communicating with CDP applications that include a CDPLogger component to retrieve historic data. 
For more information about CDP Studio see https://cdpstudio.com/.


## Installation

Clone the repository and install dependencies:

```bash
npm install
```


## Running Tests

To run the automatic tests with fake data, execute:

```bash
npm test
```

To test the time sync functionality using simulated response:

```bash
node test/testTimeSync.js
```


## Usage

The index.js file contains a simple logger built for the CDP Studio example case.

1. Set up and run the Logger in CDP Studio.
(Refer to Help → Framework - Data Logging → How to Setup Logging in Automation System)
https://cdpstudio.com/manual/cdp/cdplogger/cdplogger-configuration-example.html

2. Run the index.js file from the command line:

```bash
node examples/index.js
```

For usage related to events run:

```bash
node examples/event.js
```


## Contact

Email: support@cdptech.com