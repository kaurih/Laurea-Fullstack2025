const express = require('express');
const router = express.Router()
const Person = require('../models/person')

//Getting all
router.get('/', async (req, res) => {
    try {
        const persons = await Person.find()
        res.json(persons)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
//Getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})
//Creating a document
router.post('/', async (req, res) => {
    const person = new Person({
        name: req.body.name,
        title: req.body.title
    })
    try {
        newPerson = await person.save()
        res.status(201).json(newPerson)

    } catch (err){
        res.status(400).json({ message: err.message })
    }
})
//Updating
router.patch('/:id', (req, res) => {
    
})
//Deleting
router.delete('/:id', (req, res) => {
    
})


module.exports = router 