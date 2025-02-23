const {add, subtract} = require("./math")
const {upperCase} = require("./stringUtils")
const {getCurrentDate} = require("./dateUtils")

const createServer = require('./server');
const port = 3000;

const server = createServer(port);


message = ("Hello, Node.js!");
console.log(message);

console.log(add(2, 5));
console.log(subtract(7, 6));

console.log(upperCase("stringUtils added"));

console.log(getCurrentDate());
