const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'output.txt');

// Näitä voi testata suorittamalla node index.js -komennon

// Exercise 4: read script
fs.readFile(path.join(__dirname, 'example.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})



// Exercise 5 - write text into output.txt, if it exists. Append additional text to file
if (!fs.existsSync(filePath)) {
    // Create and write to file
    fs.writeFile(filePath, 'Tämä teksti menee output.txt -tiedostoon.', (err) => {
        if (err) throw err;
        console.log('Write script completed.');
    });
} else {
    console.log('Output.txt already exists. No new file created.');
}

fs.appendFile(path.join(__dirname, 'output.txt'), '\nLisää tekstiä!', (err) => {
    if (err) throw err;
    console.log('Output.txt has been modified.');
})



//Excercise 6 - delete script - deletes temp.txt if found.
// testaa luomalla temp.txt ennen  kuin käytät index.js -komentoa
fs.unlink(path.join(__dirname, 'temp.txt'), (err, data) => {
    if (err) {
        if (err.code ==='ENOENT') {
            console.log('Temp.txt does not exist.'); //if no temp file is found
        } else {
            console.error('Something went wrong:', err) //if there is some other error
        }
    } else {
        console.log('Temp.txt deleted!');
    }
});

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`Uncaught error: ${err}`);
    process.exit(1);
})

//Excercise 7 - Directories
if (!fs.existsSync('./testDir')) {
    fs.mkdir('./testDir', (err) =>{
        if (err) throw err;
        console.log('Directory created!')
    })
}

//Exercise 7 
// This will remove testDir immediately after its creation when run.
// kommentoi pois, jos haluat nähdä testDirin muuaallakin kuin vain kosolilokina

if (fs.existsSync('./testDir')) {
    fs.rmdir('./testDir', (err) =>{
        if (err) throw err;
        console.log('Directory removed!')
    })
}


//Exercise 8 - Watching for file changes
fs.watch(path.join(__dirname, 'watch.txt'), (eventType, filename) => {
    if (filename) {
        console.log(`${filename} has been modified!`);
    }
});

console.log(`Watching for changes on ${path.join(__dirname, 'example.txt')}...`);
