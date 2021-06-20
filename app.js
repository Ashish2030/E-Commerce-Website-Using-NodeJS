const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
mongoose.set('useFindAndModify', false);
const Product = require('./models/product');
const seedDB = require('./seedDB');
   

mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("DB Not Connected");
        console.log(err);
    })
    
    app.get('/', (req, res) => {
        res.send('<h1>Welcome to Shop App</h1>')
    })


    app.get('/products', async(req, res) => {
        const products = await Product.find({});
        res.render('products/index', { products: products });
    })

    
    app.listen(3000, () => {
        console.log("Server Running At port 3000");
    })
