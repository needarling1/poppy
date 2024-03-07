const express = require('express')
const Route = require(`../models/pin_model.js`)
const {get_pins, create_pin, get_one_pin} = require(`../controllers/pins.js`)
const {get_users, create_user} = require(`../controllers/users.js`)


const router = express.Router()

router.get('/api/pins', get_pins)
router.get('/api/pins/:id', get_one_pin)
router.post('/api/create', create_pin)
router.get('/api/login', get_users)
router.post('/api/create', create_user)

module.exports = router