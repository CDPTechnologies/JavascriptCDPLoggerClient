// event.js
// An example script to see filtered events

const Client = require('../client');

async function main() {
  const client = new Client('ws://127.0.0.1:17000', false);
  
  try {
    console.log("Waiting for connection to establish...");
    // Wait a bit to allow the connection to be established
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Build the query with a limit and offset
    const query = {
      senderConditions: [
        {
          value: "CDPLoggerDemoApp.InvalidLicense",
          matchType: Client.MatchType.Exact
        }
      ],
      dataConditions: {
        "Text": {
          value: "*", // Wildcard condition for Text field
        }
      },
      flags: Client.EventQueryFlags.NewestFirst | Client.EventQueryFlags.UseLogStampForTimeRange,
      limit: 10,   // Request a maximum of 10 events
      offset: 0    // Starting at the beginning
    };

    console.log("Counting matching events...");
    const totalCount = await client.countEvents(query);
    console.log(`Total matching events count: ${totalCount}`);
    
    console.log("Sending event query...");
    console.log("Query:", JSON.stringify(query, null, 2));
    
    const events = await client.requestEvents(query);
    console.log(`Received ${events.length} events`);
    
    if (events.length > 0) {
      console.log('\nEvents:');
      events.forEach(event => {
        // If event.data is a string, parse it; otherwise assume it's already an object.
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        console.log(JSON.stringify({
          timestamp: event.timestampSec,
          sender: event.sender,
          data: data,
          // The event tags will be attached (or requested if not yet available)
          tags: event.tags
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
