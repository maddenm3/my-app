const mongoose = require('mongoose')


const songSchema = new mongoose.Schema({
    songName: {
        type: String,
        require: true
    },
    songArtist: {
        type: String,
        require: true
    },
    albumCover: {
        type: String,
        require: true
    },
    preview: {
        type: String,
        require: true
    }
})

const Song = mongoose.model('SongInfo', songSchema)

module.exports = Song