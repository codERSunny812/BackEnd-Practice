const moongoose = require('mongoose')

moongoose.connect("mongodb://127.0.0.1:2707//practicekrobe");

const userSchema = moongoose.Schema({
    username: String,
    name: String,
    age: Number
});

module.exports = moongoose.model("user", userSchema);