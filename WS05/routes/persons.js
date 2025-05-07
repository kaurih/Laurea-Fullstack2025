const express = require('express');
const router = express.Router();
const Person = require('../models/person');

//Getting all
router.get('/getall', async (req, res) => {
    try {
        const persons = await Person.find();
        res.status(200).json(persons);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Getting by ID
router.get('/:id', async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        if (!person) {
            return res.status(404).json({ message: 'Person not found' });
        }
        res.status(200).json(person);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Creating a document
router.post('/add', async (req, res) => {
    const person = new Person({
        name: req.body.name,
        title: req.body.title
    });
    try {
        const newPerson = await person.save();
        res.status(201).json(newPerson);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Updating a person by ID
router.patch('/update/:id', async (req, res) => {
    try {
        const updatedPerson = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPerson) {
            return res.status(404).json({ message: 'Person not found' });
        }
        res.status(200).json(updatedPerson);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//deleting a person by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedPerson = await Person.findByIdAndDelete(req.params.id);
        if (!deletedPerson) {
            return res.status(404).json({ message: 'Person not found' });
        }
        res.status(200).json({ message: 'Person deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
