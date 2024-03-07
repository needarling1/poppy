const express = require('express')
const Route = require(`../models/pin_model.js`)
const {get_pins, create_pin} = require(`../controllers/pins.js`)
const {get_users, create_user} = require(`../controllers/users.js`)


const router = express.Router()

router.get('/api/pins', get_pins)
router.post('/api/create', create_pin)
router.get('/api/login', get_users)
router.get('/api/create', create_user)

module.exports = router