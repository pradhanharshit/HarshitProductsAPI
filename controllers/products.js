// ab database se agr tumhe tumhra api get krna h toh 
// pehle toh model use kroge 
const Product = require("../models/product");
// ab iss product ke andar bahut saare methods hai 
// find create delete ye saare mongoose ke methods 



const getAllProducts = async (req, res) => {
    const myData = await Product.find({});
    res.status(200)
    .json({ myData });
}  

const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find({});
    res.status(200)
    .json({ myData });
}  

module.exports = {getAllProducts, getAllProductsTesting};