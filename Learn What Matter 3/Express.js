const app = require('express');
const server = app();

server.set("view engine","ejs");

server.use((req,res,next)=>{
console.log("inside middle ware");
next();
})

// new server 
server.get('/',(req,res)=>{
res.send("<h1>Home Route</h1>")
})


// normla route
server.get('/about',(req,res)=>{
res.send("<h1>About us </h1>");
});

server.get('/profile',(req,res)=>{
    res.send("<h1>hello from profile route</h1>")
})

// dynamic route
// --> now let's create a dynamic route for the profile 
server.get('/profile/:personname',(req,res)=>{
    res.send(`<h1>Hello from the ${req.params.personname} profile</h1>`)
})



// ejs introduction express
server.get("/contact",(req,res)=>{
res.render('index')
})


server.get('/error',(req,res)=>{
    res.render('error');

})


server.listen(3001);