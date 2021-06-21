const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Product = require('./models/product');
const seedDB = require('./seedDB');
const methodOverride = require('method-override')
const productRoutes = require('./routes/products/product');
const reviewRoutes = require('./routes/reviews/review');



mongoose.connect('mongodb://localhost:27017/shopping-cart', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Database Connected");
    })
    .catch(err => {
        console.log("DB Not Connected");
        console.log(err);
    })


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
mongoose.set('useFindAndModify', false);
app.use(methodOverride('_method'))


//seedDB();

app.get('/', (req, res) => {
    res.render('landingPage');
})


// Routes


app.use(productRoutes);
app.use(reviewRoutes);



app.listen(3000, () => {
    console.log("Server Running At port 3000");
})