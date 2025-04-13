const express = require('express');
const router = express.Router();

// Route to home page
// Exercise 1: EJS setup

router.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'EJS-harjoittelua', 
        message: 'Mmm, kakkua...',

        //Exercise 2: a list of items
        items: ['maitoa', 'munia', 'jauhoja', 'sokeria'],

        // Exercise 4: lisätään nappi, jotta voidaan näyttää sislätöä valikoivasti napin painalluksella
        // näytetään kakun kuva, jos painettu
        showImage: false, // piilota aluksi
        imageUrl:'/images/cake.jpg'


    });
});

module.exports = router
