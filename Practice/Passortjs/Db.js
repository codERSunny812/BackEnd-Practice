const e = require('express')
const mongoose = require('mongoose')


exports.DbCreate = ()=>{
//connect to the DB
mongoose.connect("mongodb://127.0.0.1:27017/passportjs")
.then(()=>{
    console.log("mongoDB is successfully connected")
})
.catch((error)=>{
    console.log(`error in connecting with mongoDB ${error}`)
})
}

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique: true  //this will make sure that no two users have same username   
    },
    email:{
        type:String
    },
    password:{
        type: String
    }

});


exports.userModal = mongoose.model("userModal",userSchema)



