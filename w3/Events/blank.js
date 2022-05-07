var events = require('events');
var eventEmitter = new events.EventEmitter();

//create an event handler:

var myEventHandler = function() {
    console.log('I hear a screamoo');
}

//assign the event handler to an event:
eventEmitter.on('screamx', myEventHandler);

//fire the 'scream' event:
eventEmitter.emit('screamx');





//run aid: node createEventHandler.js