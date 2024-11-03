const mongoose = require('../config/mongoose-connection');

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password:{
        type: String,
        default: 'abcd',
    },
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product'
        },
    ],
    orders: [],
    contact: Number,
    picture: String
})

module.exports = mongoose.model('user',userSchema);