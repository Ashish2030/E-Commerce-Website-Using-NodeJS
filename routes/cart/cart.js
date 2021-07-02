const express = require('express');
const router = express.Router();
const Product = require('../../models/product');
const { isLoggedIn } = require('../../middleware');
const User = require('../../models/user');


router.get('/user/cart',isLoggedIn,async(req, res) => {

    const user = await User.findById(req.user._id).populate('cart');

    res.render('cart/showcart', { cart: user.cart });
})


router.post('/user/:id/cart',isLoggedIn, async(req, res) => {

    const product = await Product.findById(req.params.id);

    const user = req.user;

    user.cart.push(product);

    await user.save();

    res.redirect('/user/cart');
})


router.delete('/cart/:id/item/:itemId',async(req,res)=>{

    const { id, itemId } = req.params;

    await User.findByIdAndUpdate(id, { $pull: { cart: itemId } });

    res.redirect('/user/cart');
})


module.exports = router;