const express = require('express')
const Route = require(`../models/pin_model.js`)
const {get_pins, create_pin} = require(`../controllers/pins.js`)

const router = express.Router()

router.get('/', get_pins)


module.exports = router