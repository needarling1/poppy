const express = require('express')
const Route = require(`../models/pin_model.js`)
const {get_pins, create_pin} = require(`../controllers/pins.js`)

const router = express.Router()

router.get('/api/pins', get_pins)
router.post('/api/create', create_pin)


module.exports = router