const express = require('express');
const parser = require('body-parser');
const ejs = require('ejs');
const path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {message: 'Hello world'});
});


//start the server with node app
app.listen(3000, () => console.log(`Server running on port 3000`));