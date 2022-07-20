var express = require('express');
var router = express.Router();
var { body, validationResult } = require("express-validator");

var User = require('../models/user');

router.post("/register",
    body('username').isLength({ min: 6 }),
    body('password').isLength({ min: 6 }),
    (req, res) => {
      const err = validationResult(req);

      if(!err.isEmpty()) {
        return res.status(400).json({ err: err.array() });
      }

      const user = new User({
        username: req.body.username,
        password: req.body.password
      });

      user.save().then(() => {
                                res.status(200).json({
                                  message: 'Saved'
                                });
                              })
                  .catch((err) => {
                                    res.status(400).json({
                                      err: err
                                    });
                              });
});

module.exports = router;