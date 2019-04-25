const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')
const PORT = process.env.PORT || 6000

// Middleware 
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))


// connect DB 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/parking-u-db", {useNewUrlParser: true}, () => {
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
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


app.listen(PORT,() => { 
    console.log(`Server is running on port ${PORT}`)
})