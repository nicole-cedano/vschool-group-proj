const express = require('express')
const userRouter = express.Router()
const User = require('../models/user.js')


// Create a new User
userRouter.post("/", (req, res, next) => {
    const newUser = new User(req.body)
    newUser.save((err, newSavedUser) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newSavedUser)
    })
})

userRouter.get("/:_id", (req, res, next) => {
    User.findOne({ _id: req.params._id }, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(user)
    })
})

userRouter.get("/", (req, res, next) => {
    User.find((err, users) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(users)
    })
})




module.exports = userRouter

