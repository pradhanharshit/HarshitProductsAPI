require("dotenv").config();
const connectDB = require("./db/connect.js");
const Product = require("./models/product.js");
const ProductJson = require("./products.json");

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_CONNECT);
        await Product.create(ProductJson);
        console.log("success");
    }catch(error){
        console.log("error");
    }
}

start();