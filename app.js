const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Product = require('./models/product');
const seedDB = require('./seedDB');
const methodOverride = require('method-override')
const productRoutes = require('./routes/products/product');
const reviewRoutes = require('./routes/reviews/review');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const authRoutes = require('./routes/auth/auth');
const cartRoutes = require('./routes/cart/cart');



mongoose.connect('mongodb://localhost:27017/shopping-cart', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex:true
    })
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
app.use(methodOverride('_method'))


app.use(session({
    secret: 'thisisnotagoodsecret',
    resave: false,
    saveUninitialized: true
}))


app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// seedDB();

app.get('/', (req, res) => {
    res.render('landingPage');
})


app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})

// Routes


app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);
app.use(cartRoutes);



app.listen(3000, () => {
    console.log("Server Running At port 3000");
})