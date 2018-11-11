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

mongoose.model('User', userSchema);
mongoose.connect('mongodb://localhost/wlust360', {useNewUrlParser: true});
