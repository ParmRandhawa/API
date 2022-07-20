var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var registrationRouter = require('./routes/registration');
var loginRouter = require('./routes/login');
var tweetsRouter = require('./routes/tweets');

var app = express();

mongoose.connect('mongodb://127.0.0.1:27017/user', { useNewUrlParser: true, useUnifiedTopology: true  })
        .then(() => {
            console.log("Connected to database");
        })
        .catch((error) => {
            console.error(error);
        });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(registrationRouter);
app.use(loginRouter);
app.use(tweetsRouter);

module.exports = app;
