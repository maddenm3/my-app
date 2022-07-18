const mongoose = require('mongoose')


const songSchema = new mongoose.Schema({
    song: {
        type: String,
        require: true
    },
    artist: {
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

// const topSongsSchema = new mongoose.Schema({
//     songs: {
//         type: Object,
//         require: true
//     }
// })

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    photo: {
        type: String,
        require: true
    },

     topTrack: songSchema
     ,
     artist: {
        type: String,
        require: true
    },
    artistImage: {
        type: String,
        require: true
    },
    genre: {
        type: Array,
        require: true
    }

})

const User = mongoose.model('UserInfo', userSchema)

module.exports = User