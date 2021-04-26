const fs = require('fs');


// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday"
// };


// const bookJson = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJson);

const dataJson = fs.readFileSync('1-json.json').toString();

const data = JSON.parse(dataJson);

console.log(data.title);





