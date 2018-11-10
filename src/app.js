//express app goes here
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

const homeRouter = require('./routes/home-route');
app.use('/home', homeRouter);
app.get('/', function(req, res){
    res.render('dashboard', {title_page: "Wanderlust 360", trip_name: "NYC"});
});

app.listen(3000);
