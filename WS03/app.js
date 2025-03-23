//use node app to start the server
const express = require('express');
const server = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const parser = require('body-parser');
const fs = require('fs');

// Logging middleware
function logRequest(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    next();
}

// Middleware to check for custom header
function checkHeader(req, res, next) {
    if (req.headers['x-custom-header']) {
        console.log('Custom header is present.');
        next();
    } else {
        console.log('Error: Custom header is missing!');
        next();
    }
}

// Middleware setup
server.use(parser.urlencoded({ extended: true }));
server.use(express.static('public'));
server.use(logRequest);
server.use('/submit', checkHeader);
server.use(parser.json());


// reading txt file and returning it to browser
server.get('/list', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'list.txt');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Error reading the file.');
        }
        res.send(data); //send the filke contents
    });
});

//reading a JSON file and returning it as a table
server.get('/json', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'persons.json');
  
    fs.readFile(filePath, 'utf8', (err, jsonData) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return res.status(500).send('Error reading the JSON file.');
        }
  
        try {
            const data = JSON.parse(jsonData);
            let html = '<table border="1"><thead><tr>';

        if (Array.isArray(data) && data.length > 0) {
            html += Object.keys(data[0]).map(key => `<th>${key}</th>`).join('');
            html += '</tr></thead><tbody>';
  

            data.forEach(item => {
                html += '<tr>';
                html += Object.values(item).map(value => `<td>${value}</td>`).join('');
                html += '</tr>';
            });
        } else {
            html += '<tr><th>No Data</th></tr>';
        }
  
        html += '</tbody></table>';
        res.send(html);
      } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
        res.status(500).send('Error parsing the JSON data.');
      }
    });
});


//you may test /add by putting this into postman!
/*
{
    "name": "Billy Bob",
    "age": 28,
    "city": "San Francisco"
}
*/

server.post('/add', (req, res) => {
    const newUserData = req.body;
    const filePath = path.join(__dirname, 'public', 'persons.json');
  
    fs.readFile(filePath, 'utf8', (err, jsonData) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return res.status(500).send('Error reading the JSON file.');
        }
  
        try {
            const data = JSON.parse(jsonData);
            data.push(newUserData);
  
            fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8', (writeErr) => {
                if (writeErr) {
                    console.error('Error writing to JSON file:', writeErr);
                    return res.status(500).send('Error writing to the JSON file.');
            }
            res.send('User data added successfully.');
        });
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
            res.status(500).send('Error parsing the JSON data.');
        }
    });
});


//Other routes
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.get('/submit', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'submit.html'));
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

//Start up the server
server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));