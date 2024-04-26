var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'manishmatte17@gmail.com',
    pass: 'xaxo rolo bkza scem'
  }
});

var mailOptions = {
  from: 'manishmatte17@gmail.com',
  to: 'priyanka.ladhe@initiumdigital.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});