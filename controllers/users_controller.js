// DEPENDENCIES
const users = require('express').Router()
const db = require('../models')
const { User } = db 

// FIND ALL USERS
users.get('/', async (req, res) => {
    try {
        const foundUsers = await User.findAll()
        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC ENTRY
users.get('/:id', async (req, res) => {
    try {
        const foundUsers= await User.findOne({
            where: { user_id: req.params.id }
        })
        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A USER
users.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new user',
            data: newUser
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// UPDATE A USER
users.put('/:id', async (req, res) => {
    try {
        const updatedUsers = await User.update(req.body, {
            where: { 
                user_id: req.params.id }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedUsers} user information`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// DELETE A USER
users.delete('/:id', async (req, res) => {
    try {
        const deletedUsers = await User.destroy({
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedUsers} user information`
        })
    } catch(error) {
        res.status(500).json(error)
    }
})


// EXPORT
module.exports = users
