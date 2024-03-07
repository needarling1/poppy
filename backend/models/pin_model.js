//not finalized
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pin_schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
}, {timestamps: true})

module.exports = mongoose.model('Pin', pin_schema)