var fs = require('fs');

fs.unlink('mynewfile2222.txt', function (err) {
    if (err) throw err;
    console.log('its done... you wont see that again');
})





//run aid: node demo_deleteFiles.js