const mongoose = require('mongoose');



const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        min:0
    },
    body: {
        type: String,
        required:true
    },
    username: {
        type: String,
        required:true
    }
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;