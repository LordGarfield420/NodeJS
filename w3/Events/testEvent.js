var events = require('events');
var eventEmitter = new events.EventEmitter();



var myEventHandler = function() {
    console.log('eeriecuhhhhhh');
}


eventEmitter.on('thisbetheevent', myEventHandler);


eventEmitter.emit('thisbetheevent');
