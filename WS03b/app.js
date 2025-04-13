const express = require('express');
const app = express();
const routes = require('./routes/routes');
const port = 3000

// Exercise 1 - setting up EJS - test by navigating to localhost:3000

app.set('view engine', 'ejs');
app.use('/', routes); // found in the routes directory


//serve CSS
app.use(express.static('public'));

app.listen(port, () => console.log(`Server running on port ${port}`));