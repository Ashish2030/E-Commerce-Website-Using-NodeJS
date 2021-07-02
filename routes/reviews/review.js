const express = require('express');
const router = express.Router();
const Product = require('../../models/product');
const Review = require('../../models/review');
const { isLoggedIn } = require('../../middleware');



router.post('/products/:id/review',isLoggedIn,async(req, res) => {

    const product = await Product.findById(req.params.id);

    const { rating, body } = req.body.review;

    const { username } = req.user;

    let review = new Review({rating:rating,body:body,username:username});

    product.reviews.push(review);

    await review.save();
    await product.save();

    res.redirect(`/products/${req.params.id}`);
});


module.exports = router;



