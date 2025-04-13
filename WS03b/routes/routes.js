const express = require('express');
const router = express.Router();

// Route to home page
// Exercise 1: EJS setup

router.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'EJS-harjoittelua', 
        message: 'Kakkuainekset',

        //Exercise 2: a list of items
        items: ['maitoa', 'munia', 'jauhoja', 'sokeria']
    });
});

module.exports = router