const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true,  "price must be provided"],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.9,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "mi"],
            message: `{Value} is not supported`,    
        }
    }
})
// in mongoose.model(param1, param2) param1 is very important and should be in singular and first letter capital
// db collection will automatically convert it to plural
module.exports = mongoose.model('Product', productSchema);