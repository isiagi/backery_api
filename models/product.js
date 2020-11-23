const mongoose, {Schema} = require('mongoose')

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    category:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('products', productSchema)