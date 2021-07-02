const express = require('express');
const router = express.Router();
const Product = require('../../models/product');
const { isLoggedIn } = require('../../middleware');


// Get all the products and display on index
router.get('/products', async(req, res) => {
    const products = await Product.find({});
    res.render('products/index', { products: products });
})


// Getting a form for new product

router.get('/products/new',isLoggedIn, (req, res) => {
    res.render('products/new');
})



// Creating a new Product


router.post('/products',isLoggedIn, async(req, res) => {
    
    await Product.create(req.body.product);

    res.redirect('/products');
})

// Showing a particular product

router.get('/products/:id', async(req, res) => {
    
    const product = await Product.findById(req.params.id).populate('reviews');

    res.render('products/show', { product: product });
})

// Edit product


router.get('/products/:id/edit', async(req, res) => {
    
    const product = await Product.findById(req.params.id);

    res.render('products/edit', { product: product });
})

// patch request


router.patch('/products/:id', async(req, res) => {
    
    const product = await Product.findByIdAndUpdate(req.params.id, req.body.product);

    res.redirect(`/products/${req.params.id}`);
})

// Delete Product 


router.delete('/products/:id', async(req, res) => {
    
    await Product.findByIdAndDelete(req.params.id);

    res.redirect('/products');
})





module.exports = router;