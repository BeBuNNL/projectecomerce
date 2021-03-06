const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    rate: {
        type: Number,
        default: 1,
        max: 10,
        required: true
    },
    content: {
        type: String,
        required: false
    }
})

const Rating = mongoose.model('Rating', ratingSchema)
module.exports = Rating