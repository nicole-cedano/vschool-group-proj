const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 6000

// Middleware 
app.use(express.json())
app.use(morgan('dev'))


// connect DB 
mongoose.connect("mongodb://localhost:27017/parking-u-db", {useNewUrlParser: true}, () => {
    console.log("Connect to the DB")
})

//Routes
app.use("/user", require("./routes/userRoutes.js"))
app.use("/parking-locations", require('./routes/parkingRoutes.js'))

// Error Handler
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})



// Server Listen 
app.listen(PORT,() => { 
    console.log(`Server is running on port ${PORT}`)
})