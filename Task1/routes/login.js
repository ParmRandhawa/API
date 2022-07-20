var express = require('express');
var router = express.Router();
var session = require('express-session');

router.use(session({
    secret: '1234',
    name: 'userSessionID',
    saveUninitialized: false
}));

router.get('/user/login', (req, res) => {

});

module.exports = router;