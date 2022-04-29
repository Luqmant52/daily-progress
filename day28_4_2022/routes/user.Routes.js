const express = require('express')
const router = express.Router()
const db = require('../models')
const Users = db.Users

router
    .route('/')
    .get(async (req, res) => {
        // Model.findAll()
        const getAllUser = await Users.findAll()
        res.send(getAllUser)
    })

router
    .route('/signup')
    .get((req, res) => {
        console.log("Sign in get method")
    })
    .post((req, res) => {
        console.log("Sign in post method")
    })

module.exports = router