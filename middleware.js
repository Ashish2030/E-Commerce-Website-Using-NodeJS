module.exports.isLoggedIn = (req, res, next) => {
    
    if (!req.isAuthenticated()) {
        console.log("You must login first");
        return res.redirect('/login');
    }
    next();
}