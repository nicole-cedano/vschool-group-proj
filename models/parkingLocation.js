const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const parkingSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    id: String,
    vicinity: String,
    
})


module.exports = mongoose.model("Parking", parkingSchema)