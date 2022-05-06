var fs = require('fs');

fs.rename('mynewfile2222.txt', 'renamed.txt', function (err)
{
    if (err) throw err;
    console.log('file has a new name now cuh');
});




//run aid node demo_rename.js