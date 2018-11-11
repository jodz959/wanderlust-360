const express = require('express');
const mongoose = require('mongoose');
require('./../db');
const User = mongoose.model('User');
const router = express.Router();
router.use(express.urlencoded({extended:false}));
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(20);

router.get('/', function(req, res) {
  res.render('login');
});

router.post('/', function(req, res) {
   const query = {
      email: req.body.email
   }
   
   User.find(query, function(err, users) {
      if(bcrypt.compareSync(req.body.password, users[0].pwHash)){
         console.log('Login: found one ');
         res.redirect('/home');
      } else {
         res.send('Wrong password');
      }
   });
  // res.redirect('/dashboard');
});

module.exports = router;
