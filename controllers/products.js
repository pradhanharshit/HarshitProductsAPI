// ab database se agr tumhe tumhra api get krna h toh 
// pehle toh model use kroge 
const Product = require("../models/product");
// ab iss product ke andar bahut saare methods hai 
// find create delete ye saare mongoose ke methods 



const getAllProducts = async (req, res) => {

    const {company, name, featured, sort, select} = req.query;
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
    console.log(queryObject);

    // to sort the data and to select the required fields
    let apiData = Product.find( queryObject );
    if(sort) {
        // let sortFix = sort.replace(",", " ");
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }
    if(select) {
        // let selectFix = select.replace(",", " ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    // to add pagination
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;
    let skip = ( page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);
    // console.log();

    // req.query prop add krdia hai
    const Products = await apiData;
    res.status(200)
    .json({ myData });
}  

const getAllProductsTesting = async (req, res) => {
    const {company, name, featured, sort, select} = req.query;
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

    // to sort the data and to select the required fields
    let apiData = Product.find( queryObject );
    if(sort) {
        // let sortFix = sort.replace(",", " ");
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }
    if(select) {
        // let selectFix = select.replace(",", " ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    // to add pagination
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;
    let skip = ( page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    // req.query prop add krdia hai
    const Products = await apiData;
    res.status(200)
    .json({ myData });
}  

module.exports = {getAllProducts, getAllProductsTesting};