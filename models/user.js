const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = newSchema({
  username:{
    type: String,
    required: true
  },
})
module.exports =mongoose.model("User",userSchema)