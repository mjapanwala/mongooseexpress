const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    prices: {
        type: Number,
        required: true,
        max: 10,

    },
    category: {
        type: String,
        enum: ["apples", "oranges", "garlic"],
        lowercase: true
    }
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product;