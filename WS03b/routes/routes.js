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
        imageUrl:'/images/cake.jpg',
        
        // Exercise 5: lisätään taulukko, tässä tapauksessa vaikka leipurit:
        bakers: [
            {id: 1, name: 'Milla', favoriteFlavor: 'vanilja'},
            {id: 2, name: 'Marko', favoriteFlavor: 'suklaa'},
            {id: 3, name: 'Anna', favoriteFlavor: 'toffee'}
        ]


    });
});

module.exports = router
