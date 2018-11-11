//express app goes here
const express = require('express');
const mongoose = require('mongoose');
require('./db');
const User = mongoose.model('User');
const Country = mongoose.model('Country');
const app = express();
const fs = require('fs');
const request = require('request');
const rp = require('request-promise');

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));

const config = require('./config/config');
const homeRouter = require('./routes/home-route');
const loginRouter = require('./routes/login-route');
const signupRouter = require('./routes/signup-route');


app.use(express.static(__dirname + "/public"));

app.use('/home', homeRouter);
app.use('/login', loginRouter);
app.use('/sign-up', signupRouter);

var options = {
   uri: 'http://api.tripadvisor.com/api/partner/2.0/location/308272/activities?key=' + config.PARTNER_KEY,
   method: 'GET',
   q: {
      'limit': '4',
      'lang':'en', 
      'currency': 'USD',
      'product_groups': 'Food, Wine & Nightlife'
   },
   headers: {
      'User-Agent': 'None'
   },
   json: true
};


app.get('/', function(req, res){
   rp(options)
      .then(function(rests) {
         const show = rests.data.slice(0, 4);
         console.log("RESTS:", rests);
         console.log("SHOW:", show);
    Country.find({name: "China"}, function(err, countries) {
       const country = countries[0];

       res.render('dashboard', { title_page: "Wanderlust 360",
                                 trip_name: "China WinterTrip",
                                 summary: "Winter Vacation with my Best Buds!",
                                 activity: show,
                                 c_lang: "Translate to " + country.lang,
                                 p_num: country.police,
                                 f_num: country.fire,
                                 a_num: country.ambulance});

         });
   }).catch(function(err) {
      console.log("ERROR:", err);
      
   });
});


app.listen(3000);
