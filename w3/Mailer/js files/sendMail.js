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

************************************************************************************************************************

         To send HTML formatted text in your email, use the "html" property instead of the "text" property

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
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