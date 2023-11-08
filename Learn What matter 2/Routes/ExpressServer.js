const server = require('express')

const ServerCreated = server();
ServerCreated.get('/',(req,res)=>{
res.send("<h1>Hey this is the new server using express js </h1>")
})


ServerCreated.listen(1000);