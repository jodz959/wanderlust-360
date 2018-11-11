//express app goes here
const express = require('express');
const mongoose = require('mongoose');
require('./db');
const User = mongoose.model('User');
const Country = mongoose.model('Country');
const app = express();
const fs = require('fs');

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));

const homeRouter = require('./routes/home-route');
const loginRouter = require('./routes/login-route');
const signupRouter = require('./routes/signup-route');

app.use(express.static(__dirname + "/public"));

app.use('/home', homeRouter);
app.use('/login', loginRouter);
app.use('/sign-up', signupRouter);

app.get('/', function(req, res){

    Country.find({name: "China"}, function(err, countries) {

       const country = countries[0];

       res.render('dashboard', { title_page: "Wanderlust 360", 
                                 trip_name: "China WinterTrip",   
                                 summary: "Winter Vacation with my Best Buds!",
                                 c_lang: "Translate to " + country.lang,
                                 p_num: country.police,
                                 f_num: country.fire,
                                 a_num: country.ambulance});

   });
});


app.listen(3000);
