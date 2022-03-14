const express = require('express')
const router = express.Router()
const User = require('../models/UserSchema')
const url = require('url')


//get all users
router.get('/', async (req, res) => {
    try{
        const users = await User.find()
        res.json(users)
    }
    catch (err){
        res.status(500).json({ message: err.message })
    }
})

//get one user
router.get('/:id', getUser, (req, res) => {
    res.json(res.user)

})

//create a user
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        country: req.body.country,
        photo: req.body.photo
        // topSongs: [{
        //     songName: req.body.songName,
        //     songArtist: req.body.songArtist,
        //     songAlbumCover: req.body.songAlbumCover,
        //     songPreview: req.body.songPreview
        // }]           
    })
    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }
    catch (err){
        res.status(400).json({ message: err.message })

    }
})

//update a user
router.patch('/:id', getUser, async (req, res) => {
    if (req.body.name != null){
        res.user.name = req.body.name
    }
    if (req.body.country != null){
        res.user.country = req.body.country
    }
    if (req.body.photo != null){
        res.user.photo = req.body.photo
    }
    try{
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    }
    catch (err){
        res.status(400).json({ message: err.message })
    }
})

//delete a user
router.delete('/:id', getUser, async (req, res) => {

    try{
        await res.user.remove()
        res.json({ message: 'User deleted'})
    }
    catch(err){
        res.status(500).json({ message: err.message})
    }
})

async function getUser(req, res, next){
    let user
    try{
        user = await User.findById(req.params.id)
        if (user == null) {
            return res.status(404).json( {message: 'Cannot find user' })
        }
    }
    catch(err){
        return res.status(500).json({ message: err.message })
    }

    res.user = user
    next()
} 

module.exports = router