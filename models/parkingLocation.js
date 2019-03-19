const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const parkingSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true
    },
    href: String,
    location: String
})


module.exports = mongoose.model("Parking", parkingSchema)