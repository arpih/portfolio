const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  return res.send('API working...')
});

app.post('/mail', (req, res) => {
   const { firstname, lastname, email, msg } = req.body;

   const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
       user: process.env.EMAIL,
       pass: process.env.PASSWORD
     }
   });

   const mailOptions = {
     from: 'arpinesasunih@gmail.com',
     to: 'arpinesasunih@gmail.com',
     subject: 'Portfolio',
     text: `${msg} \n\n${firstname} ${lastname} \n${email}`
   }

   transporter.sendMail(mailOptions, (err, result) => {
     if (err) {
       console.log(err);
       res.json('Opps! It seems like some error occured please try again.');
     } else {
       res.json('Thank you for e-mailing me. I will reply to you within 2 working days.');
     }
   });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});