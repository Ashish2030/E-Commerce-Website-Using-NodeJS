const express = require('express');
const router = express.Router();
const Product = require('../../models/product');
const Review = require('../../models/review');



router.post('/products/:id/review', async(req, res) => {

    const product = await Product.findById(req.params.id);
    const review = new Review(req.body.review);

    product.reviews.push(review);

    await review.save();
    await product.save();

    res.redirect(`/products/${req.params.id}`);
});


module.exports = router;
