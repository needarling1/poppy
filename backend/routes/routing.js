const express = require('express')
const Route = require(`../models/pin_model.js`)
const {get_pins, get_one_pin, create_pin} = require(`../controllers/pins.js`)

const router = express.Router()

router.get('/api/pins', get_pins)
router.get('/api/pins/:id', get_one_pin)
router.post('/api/create', create_pin)


module.exports = router