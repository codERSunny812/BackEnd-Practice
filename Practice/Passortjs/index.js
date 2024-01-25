const express = require('express')
const app = express();
require('dotenv').config()
const bodyParser = require('body-parser')
const {DbCreate , userModal} = require('./Db')

const port = process.env.PORT || 3001;

DbCreate();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine","ejs")


app.get('/',(req,res)=>{
    res.render('index');
});


app.get('/register',(req,res)=>{
    res.render('register');
});

app.get('/login',(req,res)=>{
    res.render('Login')
})


app.post('/register',async(req,res)=>{
   let user =  await userModal.findOne({username:req.body.username});

   if(user) return res.status(200).send("user already exist");

   const newUser = userModal.create(req.body);


   res.send(newUser);



})


app.listen(port,()=>{
    console.log(`the server is runnning at the the port: ${port}`);
})





