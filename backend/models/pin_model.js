//not finalized
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pin_schema = new Schema({
    title: {
        type: String,
        required: false
    },
    creator: {
        type: String,
        required: true
    },
    image: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
}, {timestamps: true})

module.exports = mongoose.model('Pin', pin_schema)