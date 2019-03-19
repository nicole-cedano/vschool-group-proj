const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = 

// Middleware 
app.use(express.json())
app.use(morgan('dev'))


// connect DB 
mongoose.connect("mongodb://localhost:27017/db-relations", {useNewUrlParser: true}, () => {
    console.log("Connect to the DB")
})







// Server Listen 
app.listen