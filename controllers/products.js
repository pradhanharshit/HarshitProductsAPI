// ab database se agr tumhe tumhra api get krna h toh 
// pehle toh model use kroge 
const Product = require("../models/product");
// ab iss product ke andar bahut saare methods hai 
// find create delete ye saare mongoose ke methods 



const getAllProducts = async (req, res) => {

    const {company, name, featured} = req.query;
    const queryObject = {};

    if(company) {
        queryObject.company = company;
    }

    if(name) {
        queryObject.name = {$regex: name, $options: "i"};
    }

    if(featured) {
        queryObject.featured = featured;
    }
    // console.log(queryObject);

    // req.query prop add krdia hai
    const myData = await Product.find( queryObject );
    res.status(200)
    .json({ myData });
}  

const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find( req.query );
    res.status(200)
    .json({ myData });
}  

module.exports = {getAllProducts, getAllProductsTesting};