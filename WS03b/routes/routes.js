const express = require('express');
const router = express.Router();

// Route to home page

router.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'EJS-harjoittelua', 
        message: 'Hello, EJS!'
    });
});

module.exports = router