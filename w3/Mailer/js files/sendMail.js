var nodemailer = require('nodemailer');


//google's policy doesnt allow us to send emails this way. but it works
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jamesrodrickgarfield1999@gmail.com',
    pass: '****************'
  }
});



/*          use this instead of the snippet below to send email to multiple recipients. 


var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
}


*/

var mailOptions = {
  from: 'jamesrodrickgarfield1999@gmail.com',
  to: 'sahan.kaniska@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy but remove password from script!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email is now sent: ' + info.response);
  }
});

//run aid node sendMail.js