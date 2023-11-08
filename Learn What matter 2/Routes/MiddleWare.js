const server = require('express')

const expressServer = server();




expressServer.get('/',(req,res)=>{
    res.send("<div><h1>This is the heading of the server</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p></div>");
});

expressServer.use((req, res, next) => {
    // document.write("hello  from middle ware");
    console.log("hello from the middleware");
    next();
});

expressServer.get(('/aboutus'),(req,res)=>{
res.send("<h1>hey this is the route page</h1>")
});

expressServer.listen(2911);



