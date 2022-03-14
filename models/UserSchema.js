const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
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
    }
    // topSongs: [
    //     {
    //         songName: {type: String, require: true},
    //         songArtist: {type: String, require: true},
    //         songAlbumCover: {type: String, require: true},
    //         songPreview: {type: String, require: true}
        
    // }
    // ]
})

const User = mongoose.model('UserInfo', userSchema)

module.exports = User