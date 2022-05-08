var nodemailer = require('nodemailer');


//google's policy doesnt allow us to send emails this way. but it works
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jamesrodrickgarfield1999@gmail.com',
    pass: '****************'
  }
});

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