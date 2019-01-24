var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pristar45@gmail.com',
    pass: 'Priloki143'
  }
});

var mailOptions = {
  from: 'pristar45@gmail.com',
  to: 'info@uki.life',
  subject: 'Testing my nodemailer module',
  html: '<h1>This is easy !</h>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
