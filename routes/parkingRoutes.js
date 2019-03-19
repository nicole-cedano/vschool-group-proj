const express = require('express')
const parkingRouter = express.Router()
const Parking = require('../models/parkingLocation.js')

// Get a users locations
parkingRouter.get("/user/:userID", (req, res, next) => {
    Parking.find({user: req.params.userID}, (err, userParking) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(userParking)
    })
})

// Add a location to the users saved locations
parkingRouter.post('/:userID', (req, res, next) => {
    const newParking = new Parking(req.body)
    newParking.user = req.params.userID
    newParking.save((err, userParking) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(userParking)
    })
})


module.exports = parkingRouter