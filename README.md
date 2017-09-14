## Heating Control

This is a prototype for a simple heating control service. We have to to keep the room temperature at 22C. We have to use mqtt protocol to get and send messages to sensors.

The architecture is based on this guidelines https://github.com/lab-coop/dev_guidelines. Later we should extend the execption handling in the broker and the heating service. The default values should come from config or db. We should get the initial vavle state from a message. We use the async-mqtt module as we use async await in our projects. We should move out the valve related code from the sensors service.

### To init the project:
```npm install```

### To run the tests:
```npm run test:all```

### TODO:
  * Create a command line tool that start the heating control.
  * Test the real mqtt broker implementation with a real server.
  * Create a routing logic for broker in case of if we introduce more rooms.
  * Implement multiple rooms handling.
  * Implement a better heating control logic.
  * Implement the motion sensor.
