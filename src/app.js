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
<<<<<<< Updated upstream
    res.render('dashboard', {title_page: "Wanderlust 360",
    trip_name: "China WinterTrip", summary: "Winter Vacation with my Best Buds!"});
=======
   res.render('bootstrap-layout', {title_page: "Wanderlust 360", trip_name: "NYC"});
>>>>>>> Stashed changes
});


app.listen(3000);
