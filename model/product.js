const mongoose = require('mongoose')

var date = new Date()

const Product = mongoose.model('Product', {
    productName: {
        type: String,
        required: true,
        trim: true
    },
    productID: {
        type: String,
        required: true,
        trim: true
    },
    manufacturer: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: String,
        required: true,
        trim: true
    },
    timestamp: {
        type: String,
        default: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
        required: true
    }
})

module.exports = Product