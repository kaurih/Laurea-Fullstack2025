const express = require('express');
const server = express();
const path = require('path');
const port = 3000;

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

/*
server.get('/about', (req, res) => {
    res.send('About page');
});

server.get('/contact', (req, res) => {
    res.send('Contact page');
});

server.get('/services', (req, res) => {
    res.send('Services page');
});
*/

server.listen(port, () => console.log(`Server running on port ${port}`));