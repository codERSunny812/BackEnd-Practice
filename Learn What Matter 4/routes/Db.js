const mongoose = require('mongoose');


// connect with the database
mongoose.connect("mongodb://127.0.0.1:27017/practicekro");


// create documet in the DB
const userSchema = mongoose.Schema({
    userName: String,
    name: String,
    age: Number,
});


// create collection in the database
module.exports = mongoose.model("UserModal", userSchema);


// now collection is empty but we add some thing in it
