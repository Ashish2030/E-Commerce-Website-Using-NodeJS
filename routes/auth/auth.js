const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const passport = require('passport');


// Get signup page
router.get('/register', (req, res) => {
    res.render('auth/signup');
})



// Register the new user
router.post('/register', async(req, res) => {
    
    const user = {
        username: req.body.username,
        email:req.body.email
    }

    const newUser=await User.register(user, req.body.password);

    res.redirect('/login');
})


// get login page

router.get('/login', (req, res) => {
    
    res.render('auth/login');
})


// Login the existing user
router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {

    
    res.redirect('/products');
})


// Logout the user from the current session
router.get('/logout', (req, res) => {
    req.logout();

    res.redirect('/login');
})

module.exports = router;



