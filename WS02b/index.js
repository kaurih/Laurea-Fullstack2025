const fs = require('fs');

fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`Uncaught error: ${err}`);
    process.exit(1);
})