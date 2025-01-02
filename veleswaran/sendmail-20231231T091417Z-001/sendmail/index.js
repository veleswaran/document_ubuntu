const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.set("view engine","ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false, 
    auth: {
      user: "systems@altalya.com",
      pass: "GW4FCXLj09qxtmnc",
    },
});

app.get('/',(req,res)=>{
    res.render("inputform");
})
// API endpoint to handle email sending
app.post('/api/sendEmail', (req, res) => {
  const { name, email, message } = req.body;

  // Email content
  const mailOptions = {
    from: 'vels344@gmail.com', // Sender email
    to: 'vel.eswaran@altalya.com', // Receiver email
    subject: 'New Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

