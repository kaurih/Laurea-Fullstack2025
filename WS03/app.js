const express = require('express');
const server = express();
const path = require('path');
const PORT = 3000 || process.env.PORT;
const parser = require('body-parser');

// Body-parser middleware setup
server.use(parser.urlencoded({extended:true}));
server.use(express.static('public'));

//Logging middleware
function logRequest(req, res, next){
    console.log(`${req.method} ${req.url}`);
    if (req.headers['x-custom-header']){
        next();
    } else {
        res.status(400).send('Error: Custom header is missing!');
    }    
    
}

function checkHeader(req, res, next){

}

//POST
server.post('/submit', (req, res) => {
    const requestBody= req.body;
    console.log(requestBody); // log the response to console
    res.json(requestBody); // respond with recieved data
});


//GET
server.get('/submit', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'submit.html'));
});

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

server.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

server.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));