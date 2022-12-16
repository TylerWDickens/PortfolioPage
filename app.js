const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const functions = require('firebase-functions')
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrsmDHBCqXRl_2NOF1f3oFfCXvrMWdoR0",
    authDomain: "portfoliopage-bf160.firebaseapp.com",
    projectId: "portfoliopage-bf160",
    storageBucket: "portfoliopage-bf160.appspot.com",
    messagingSenderId: "911510036212",
    appId: "1:911510036212:web:da22a4e45de26c0d8788a1",
    measurementId: "G-H5W7DDK9VL"
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fireApp);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

router.post('/send-email', (req, res) => {
    // Extract the form data from the request body
    const { name, email, phone, message } = req.body;

    // Set up the nodemailer transport to use Gmail
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    // Define the email options
    const mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: 'tyler.william.dickens@gmail.com',
        subject: 'New form submission',
        html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `
    };

    // Send the email
    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.sendStatus(500);
        } else {
            console.log(`Email sent: ${info.response}`);
            res.sendStatus(200);
        }
    });
});

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
