const {add, subtract} = require("./math")
const {upperCase} = require("./stringUtils")
const {getCurrentDate} = require("./dateUtils")

message = ("Hello, Node.js!");
console.log(message);

console.log(add(2, 5));
console.log(subtract(7, 6));

console.log(upperCase("stringUtils added"));

console.log(getCurrentDate());
