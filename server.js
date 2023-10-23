const express = require("express");
require("dotenv").config();
const bodyParser = require('body-parser'); // run npm i body-parser
const nodemailer = require('nodemailer'); // run npm i nodemailer

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3001;
const path = require("path");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// NodeMailer
// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
port: 465,               // true for 465, false for other ports
host: "smtp.gmail.com", // change to something more generic (We only need users to send emails to Hymer)
   auth: {
        user: 'youremail@gmail.com',
        pass: 'password',
     },
secure: true,
});

// THE SERVER
app.use(express.static(path.join(__dirname, "/")));

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

// EMAIL HANDLING (https://nodemailer.com/)
router.post("/send", (req, res) => {
  const {from, subject, text} = req.body;

  // write function to format text to HTML
  // text.for() {} -- use to perform formatting and assign to var named "formatted"
  // let textHTML = formatted
  
  const mailData = {
  from: from,  // sender address
  to: 'myfriend@gmail.com',   // Hymer's email address (MOODY's for testing)
  subject: subject,
  text: text,
  html: formatted,

  transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
};
})

app.listen(PORT, () => console.log(`App is live on port ${PORT}!`));
