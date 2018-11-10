//express app goes here
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
    res.render('layout', {title: "wander"});
});

app.listen(3000);
