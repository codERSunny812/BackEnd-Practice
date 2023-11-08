const server = require('express')

const expressServer = server()

// base route 

expressServer.get('/',(req,res)=>{
res.send("<h1>this is the home route </h1>")
});

// route 2
expressServer.get('/contact',(req,res)=>{
res.send("<h1>This is the second route</h1>")
});


expressServer.get('/about',(req,res)=>{
res.send("<h1>This is the third route </h1>")
});



expressServer.listen(4001);