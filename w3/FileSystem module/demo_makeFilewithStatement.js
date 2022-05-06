var fs = require('fs');
/*       difference between this and appendfile is = 
    this file cannot append. can only 
    create a file with a line printed in it once    */


fs.writeFile('newfile33333.txt', 'wtf is the diff between this and appendfile.js', function(err)
{
    if (err) throw err;
    console.log('bro there is no diff between this and appendfile.js')
});

//run aid: node demo_makeFilewithStatement.js