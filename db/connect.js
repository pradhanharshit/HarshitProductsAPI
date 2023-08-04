const mongoose = require("mongoose");

const connectDB = (uri) => {
    // console.log("connect db");  
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}
// ye connectDB promise return krta hai isliye hm start m async function ka use kr rhe th
module.exports = connectDB;