const fs = require('fs');


// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday"
// };


// const bookJson = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJson);

// const dataJson = fs.readFileSync('1-json.json').toString();

// const data = JSON.parse(dataJson);

// console.log(data.title);

// console.log(data.author);




// const userData = fs.readFileSync('1-json.json');
// const dataJson = userData.toString();
// const user = JSON.parse(dataJson);

// user.name = "Snehomoy";
// user.age = 19;

// const userJson = JSON.stringify(user);
// fs.writeFileSync('1-json.json', userJson);



const data = fs.readFileSync('1-json.json');

const dataJson = data.toString();

const user = JSON.parse(dataJson);

user.planet = "Vormir";

// console.log(user);

const userJson = JSON.stringify(user);

fs.writeFileSync('1-json.json', userJson);












