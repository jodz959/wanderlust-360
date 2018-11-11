const express = require('express');
const mongoose = require('mongoose');
require('./../db');
const User = mongoose.model('User');
const router = express.Router();
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(20);

router.use(express.urlencoded({extended: false}));

router.get('/', function(req, res) {
  res.render('sign-up');
});

router.post('/', function(req, res) {
   new User({
      fname: req.body.fname,
      lname: req.body.lname,
      pcity: req.body.pcity,
      email: req.body.email,
      pwHash: bcrypt.hashSync(req.body.password, salt),
      date_created: Date.now()
   }).save(function(err, user){
      console.log("SIGNUP: saved on sign up");
      res.redirect('/home');
   });
  // res.redirect('/dashboard');
});

module.exports = router;

