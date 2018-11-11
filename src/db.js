const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   fname: String,
   lname: String,
   pcity: String,
   email: String,
   pwHash: String,
   date_created: Date
  });

const countrySchema = new Schema({
   name: String,
   police: String,
   ambulance: String,
   fire: String,
   lang: String
});

const tripSchema = new Schema({
   user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, 
   start_date: Date,
   end_date: Date  
});

mongoose.model('Trip', tripSchema);
mongoose.model('Country', countrySchema);
mongoose.model('User', userSchema);
mongoose.connect('mongodb://localhost/wlust360', {useNewUrlParser: true});
