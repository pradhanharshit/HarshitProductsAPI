const mongoose = require("mongoose");

uri = "mongodb+srv://hpradhan:iSjzwuRVU2EZ9wbT@harshit-productsapi.rwsozkf.mongodb.net/Harshit-ProductsAPI?retryWrites=true&w=majority"

const connectDB = () => {
    console.log("connect db");  
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}
// ye connectDB promise return krta hai isliye hm start m async function ka use kr rhe th

module.exports = connectDB;