
var url = require('url');
//var adr = 'http://localhost:8080/default.htm?year=2022&month=May';    //can also switch to this links below
var adr = 'https://www.freecodecamp.org/news/how-to-interact-with-web-services-using-python/';
//var adr = 'https://www.google.com/search?client=opera-gx&q=change+results+on+a+webpage&sourceid=opera&ie=UTF-8&oe=UTF-8';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.year); //returns 2022
console.log(qdata.month); //returns 'february'



//run aid: node demo_breakdown.js