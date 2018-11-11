//express app goes here
const express = require('express');
const mongoose = require('mongoose');
require('./db');
const User = mongoose.model('User');
const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static('./src/public'));
app.use(express.urlencoded({extended: false}));

const homeRouter = require('./routes/home-route');
const loginRouter = require('./routes/login-route');
const signupRouter = require('./routes/signup-route');

app.use('/home', homeRouter);
app.use('/login', loginRouter);
app.use('/sign-up', signupRouter);

app.get('/', function(req, res){
   res.render('dashboard', {title_page: "Wanderlust 360", trip_name: "NYC"});
});

app.listen(3000);
