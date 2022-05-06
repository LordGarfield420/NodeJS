var fs = require('fs');       //creates a file named thecuh.txt and in it, prints "the cuh was here"

fs.appendFile('thecuh.txt', 'the cuh was here', function (err)
{
    if (err) throw err;
    console.log('file made and saved cuh  ');
});    

//run aid: node demo_appendfile.js