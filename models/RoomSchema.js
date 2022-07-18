const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    users: {
        type: Array,
        require: true
    },
    messages: {
        type: Array,
        require: true
    }
})

const Room = mongoose.model("RoomInfo", roomSchema)

module.exports = Room