const fs = require('fs');
const chalk = require('chalk');


const getNotes = () => {
    return("Your all the notes are here...");
}


const addNotes = (title, body) => {
    // add notes functionality

    const notes = loadNotes();

    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    })
    
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes);

        console.log(chalk.green.bold.inverse("Note Successfully Added!"))

    } else {
        console.log(chalk.red.bold.inverse("Note title already exists"));
    }


    // console.log(notes);
};




const removeNotes = (title) => {

    // remove note functionality
    
    const notes = loadNotes();

    const notesTokeep = notes.filter((note) => {
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

const listNotes = () => {

    // list down all the notes

    const notes = loadNotes();

    console.log(chalk.white.bold.inverse('Your notes '));

    notes.forEach((note) => {
        console.log(note.title);
    });

}


const readNotes = (title) => {
   
    // read a specific note with the mentioned title

    const notes = loadNotes();

    console.log("Read Note!");

}



const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}


const loadNotes = () => {
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
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
};