const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 4500;


const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());


//connect with the database
mongoose.connect("mongodb://127.0.0.1:27017/rapidapi");

// schema for the database
const productSchema = mongoose.Schema({
    name:String,
    description: String,
    price:Number
})

// modal for the database
const ProductModal = mongoose.model("ProductModal",productSchema);


app.post('/api/v1/createProduct', async (req, res) => {
    try {
        // Create a new instance of the ProductModal model
        let newProduct = new ProductModal(req.body);

        // Save the new product to the database
        await newProduct.save();

        res.send(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});



app.get('/api/v1/viewProduct',async(req,res)=>{

    let viewProducts = await ProductModal.find();

    res.send(viewProducts);

})


app.listen(port,()=>{
    console.log(`port is running at port:${port}`)
})



