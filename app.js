const validator = require('validator');

// const add = require('./utils');
const getNotes = require('./notes');

// const sum = add(3, 86);


const msg = getNotes();

console.log(msg);

console.log(validator.isEmail('name@example.com'));

console.log(validator.isURL('https:/ok.com'));

