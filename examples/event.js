// event.js
// An example script to see filtered events
const Client = require('../client');

async function main() {
  const client = new Client('ws://127.0.0.1:17000', false);
  
  try {
    console.log("Waiting for connection to establish...");
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const query = {
      senderConditions: [
        {
          value: "CDPLoggerDemoApp.I*", // Wildcard pattern for sender
          matchType: "wildcard"
        }
      ],
      dataConditions: {
        "Text": {
          value: "*", 
          matchType: "wildcard"
        }
      }
    };
    
    
    

    console.log("Sending event query...");
    console.log("Query:", JSON.stringify(query, null, 2));
    
    const events = await client.requestEvents(query);
    console.log(`Received ${events.length} events`);
    
    if (events.length > 0) {
      console.log('\nEvents:');
      events.forEach(event => {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        console.log(JSON.stringify({
          timestamp: event.timestampSec,
          sender: event.sender,
          data: data
        }, null, 2));
      });
    }

  } catch (error) {
    console.error('Error:', error);
    console.error('Stack:', error.stack);
  } finally {
    console.log("Disconnecting from CDP Logger...");
    client.disconnect();
    process.exit(0);
  }
}

main().catch(error => {
  console.error("Unhandled error:", error);
  process.exit(1);
});
