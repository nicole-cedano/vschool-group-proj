const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('moongoose')

//Middlewares for every request

app.use(express.json())
app.use(morgan('dev'))

//DB connect 

mongoose.connect("mongodb://localhost:27017/db-relations", {useNewUrlParser: true}, () => {
    console.log("[o] Connected to the DB")
})
//Routes
app.use("/user",
require('/routes/userRoutes.js)'))
app.use("/todo",
require('/routes/todoRoutes.js'))

//Error handler
app.use((err, req, res, next) => {
  console.error(err)
  return res.send({errMsg: err.message})
})
// Server
app.listen(7000, () => {
  console.log("[+] Server is running on port 7000")
})

