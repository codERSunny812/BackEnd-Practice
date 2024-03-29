const app = require('express');
// const { default: mongoose } = require('mongoose');
const server = app();
const userModel = require('./Db');

server.set("view engine", "ejs");

// static file configuration
server.use(app.static('./Public'));

server.use((req, res, next) => {
    console.log("inside middle ware");
    next();
})

// new server 
server.get('/', (req, res) => {
    res.send("<h1>Home Route</h1>")
})


// normla route
server.get('/about', (req, res) => {
    res.send("<h1>About us </h1>");
});

server.get('/profile', (req, res) => {
    res.send("<h1>hello from profile route</h1>")
})

// dynamic route
// --> now let's create a dynamic route for the profile 
server.get('/profile/:personname', (req, res) => {
    res.send(`<h1>Hello from the ${req.params.personname} profile</h1>`)
})



// ejs introduction express
server.get("/contact", (req, res) => {
    res.render('index', { submit: "click me" })
})

// we can pass data in side the render and use it in our ejs file
// by passing this along with index we can replace all the submit text with the click me  

server.get('/create', async (req, res) => {
    const createdUser = await userModel.create({
        username: "codersunny812",
        name: "sunny",
        age: 21,
    });

    res.send(createdUser);

})




server.get('/error', (req, res) => {
    res.render('error');

})


server.listen(3001);