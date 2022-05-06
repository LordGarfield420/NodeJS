var fs = require('fs');                 //this makes a file named mynewfile222222.txt with fs.open() method
fs.open('mynewfile2222.txt', 'w', function (err,file){
    if (err) throw err;
    console.log('congratulations dum dum you made a file');
});


//run aid: node demo_makeFile1.js