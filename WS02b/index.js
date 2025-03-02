const fs = require('fs');
const path = require('path');


//read script
fs.readFile(path.join(__dirname, 'example.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

//write script
fs.writeFile(path.join(__dirname, 'output.txt'), 'Tämä teksti menee output.txt -tiedostoon.', (err) => {
    if (err) throw err;
    console.log('Write script completed.');
})

//append script
fs.appendFile(path.join(__dirname, 'output.txt'), '\nLisää tekstiä!', (err) => {
    if (err) throw err;
    console.log('Output.txt has been modified.');
})


// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`Uncaught error: ${err}`);
    process.exit(1);
})