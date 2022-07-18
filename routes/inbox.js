const express = require('express')
const router = express.Router()
const User = require('../models/UserSchema')
const Room = require('../models/RoomSchema')


//get all rooms
router.get('/', async (req, res) => {
    try{
        const rooms = await Room.find()
        res.json(rooms)
    }
    catch (err){
        res.status(500).json({ message: err.message })
    }
})

//post to a room
router.post('/', async (req, res) => {
    const room = new Room({
        users: req.body.users,
        messages: req.body.messages
              
    })
    try{
        const newRoom = await room.save()
        res.status(201).json(newRoom)
    }
    catch (err){
        res.status(400).json({ message: err.message })

    }
})

module.exports = router
