const express = require('express');
const server = express();
const path = require('path');
const PORT = 3000 || process.env.PORT;
const parser = require('body-parser');

// setting up body-parser middleware for JSON
server.use(parser.json());

server.post('/submit', (req, res) => {
    const requestBody= req.body;
    console.log('requestBody'); // log the response to console
    res.json(requestBody); // respond with recieved data
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