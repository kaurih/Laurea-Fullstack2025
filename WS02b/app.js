//Monster Hunter World skill information from an open API

const axios = require('axios');

//Api endpoint
const apiUrl= 'https://mhw-db.com/skills';

//Get request to api
axios.get(apiUrl)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Failed to GET skills:', error)
    });

//skripti näyttäisi toimivan oikein!