const mongoose = require('mongoose');
const express = require("express");
const path = require("path");
const Product = require("./models/products");


async function connection() {
    mongoose.connect('mongodb://localhost:27017/farmStore')
}
connection().then(response=> console.log("it connected"))
.catch(err => console.log(err));

Product.insertMany([{
    name: "Crisp Garlic",
    prices: 2.99,
    category: "garlic"
},
{
    name: "apples",
    prices: 7.99,
    category: "apples"
},
{
    name: "flat Oranges",
    prices: 2.33,
    category: "oranges"
}]
)
.then(response => console.log(response))
.catch(err => console.log(err))

// const firstProduct = new Product({
//     name: "Grapes",
//     prices: 9,
//     category: "Apples"

// })
// //.save will put it to the Mongo Database
// firstProduct.save()
// .then(response =>console.log(response))
// .catch(err => console.log(err))