const mongoose = require('mongoose')
const express = require("express")
const path = require("path")
const Product = require("./models/products")
const redditData = require("./data.json")
// const { find } = require('./models/products')

async function connection() {
    mongoose.connect('mongodb://localhost:27017/farmStore')
}
connection().then(response=> console.log("it connected"))
.catch(err => console.log(err));


const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")


app.get("/", async (req, res) => {
    const allProducts = await Product.find({})
    let categories;
    for (let category of allProducts) {
        categories = category.name;
    }

    res.render('general',{categories})
})
app.post("/product", (req, res) => {
    console.log(req.body)
    // const newProduct = new Product({

    // })
})
app.get('/product', async(req, res) => {
    const allProducts = await Product.find({})
    console.log(allProducts)
    res.render("product/product", {allProducts})
})

app.get("/product/:id", async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id)
    console.log(product, id)
    res.render("product/findone", {id})
})

app.get("/r/:subreddit", (req, res) => {
    const {subreddit} = req.params;
    let data;
    let authors;
    if (redditData[subreddit]) {
       data = redditData[subreddit].posts; 
       for (let item of data) {
            authors =item.author
       }
    } else {
        data = subreddit;
    }
    
    const items = ["Orange", "Mango", "Apples", "Grapes"];

    res.render('home', {items, authors, subreddit})
})








app.listen(3000,() => {
    console.log("App is listening on 3000")
})