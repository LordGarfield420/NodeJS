var fs = require('fs');

fs.writeFile('theCuhZzZzZzZzZ.txt', 'text replacement dum dum', function (err)
{
    if (err) throw err;
    console.log('text replaced bro');
});



//run aid: node demo_replaceText.js