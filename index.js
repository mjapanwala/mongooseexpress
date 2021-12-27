const mongoose = require('mongoose')
const express = require("express")
const path = require("path")
const Product = require("./models/products")
const redditData = require("./data.json")

// async function connection() {
//     mongoose.connect('mongodb://localhost:27017/farmStore')
// }
// connection().then(response=> console.log("it connected"))
// .catch(err => console.log(err));


const app = express()

// app.set("views", path.join("__dirname", "views"))
app.set("view engine", "ejs")

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