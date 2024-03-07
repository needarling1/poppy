require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const all_routes = require('./routes/routing.js')
const bodyParser = require('body-parser')
const cors = require('cors');
const user_model = require('./models/user_model.js')

const app = express()

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/', all_routes)
app.post('/register', (req, res) => {
    user_model.create(req.body).then(users => res.json(users)).catch(err => res.json(err))
}),
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(4000, () => {
            console.log('listening')
        })
    })
    .catch((error) => {
        console.log(error)
    })
