/*
One time function for populating a country's information
*/
const fs = require('fs');
const mongoose = require('mongoose');
require('./db');
const Country = mongoose.model('Country');


function pop() {
   fs.readFile('../country_data.csv', 'utf-8', (err, data) => {
      if (err) {
         console.log("There was an error reading the file");
      } else {
         return process(data);
      }
   });
}

function process(data) {
   let lines = [];
   lines = data.split('\n');
   let headers = lines.slice(0, 1);
   lines.splice(0, 1); //remove headers

   lines.forEach((item) => {
      item = item.trim().split(/,/);
      new Country({
         name: item[0],
         police: item[1],
         ambulance: item[2],
         fire: item[3],
         lang: item[4]    
      }).save(function(err, sound) {
         console.log('ERROR: ', err);
         console.log('SAVED');
      });
      //console.log(item); 
   });
}

pop();
