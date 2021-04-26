const fs = require('fs');
const chalk = require('chalk');


const getNotes = function () {
    return("Your all the notes are here...");
}

const addNotes = function (title, body) {
    // add notes functionality

    const notes = loadNotes();

    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    })
    
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes);

        console.log("Note Successfully Added!")

    } else {
        console.log("Note title already exists");
    }


    // console.log(notes);
};




const removeNotes = function (title) {

    const notes = loadNotes();

    const notesTokeep = notes.filter(function (note) {
        return note.title !== title;
    })

    if (notes.length > notesTokeep.length) {

        console.log(chalk.green.inverse.bold("Note deleted!"));
        saveNotes(notesTokeep);

    } else {
        console.log(chalk.red.inverse.bold("Nothing to delete!"));
    }

    // console.log(title);
}




const saveNotes = function (notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (err) {
        return [];
    }
};

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
};