// DEPENDENCIES
const entries = require('express').Router()
const db = require('../models')
const { Entry } = db 

// FIND ALL ENTRIES
entries.get('/', async (req, res) => {
    try {
        const foundEntries = await Entry.findAll({
            order: [ [ 'date', 'DESC']]
            
        })
        res.status(200).json(foundEntries)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC ENTRY
entries.get('/:id', async (req, res) => {
    try {
        const foundEntry = await Entry.findOne({
            where: { entry_id: req.params.id }
        })
        res.status(200).json(foundEntry)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A ENTRY
entries.post('/', async (req, res) => {
    try {
        const newEntry = await Entry.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new entry',
            data: newEntry
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// UPDATE AN ENTRY
entries.put('/:id', async (req, res) => {
    try {
        const updatedEntries = await Entry.update(req.body, {
            where: { 
                entry_id: req.params.id }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEntries} entry`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// DELETE AN ENTRY
entries.delete('/:id', async (req, res) => {
    try {
        const deletedEntries = await Entry.destroy({
            where: {
                entry_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEntries} entry`
        })
    } catch(error) {
        res.status(500).json(error)
    }
})





// EXPORT
module.exports = entries
