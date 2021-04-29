const fs = require('fs');

const chalk = require('chalk');


const getNotes = () => {
    return("Your all the notes are here...");
}


    

const addNotes = (title, body) => {

    // add notes functionality

    const notes = loadNotes();

    // const duplicateNotes = notes.filter((note) => {
    //     return note.title === title;
    // }) [less optimised]


    const duplicateNote = notes.find((note) => note.title === title);
    // using find method to make the task more optimised.

    if(duplicateNote === undefined){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes);

        console.log("\n");
        console.log(chalk.green.bold.inverse("Note Successfully Added!"))
        console.log("\n");
    } else {
        console.log("\n");
        console.log(chalk.red.bold.inverse("Note title already exists"));
        console.log("\n");
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

        console.log("\n");
        console.log(chalk.green.inverse.bold("Note deleted!"));
        console.log("\n");
        saveNotes(notesTokeep);

    } else {
        console.log("\n");
        console.log(chalk.red.inverse.bold("Nothing to delete!"));
        console.log("\n");
    }

    // console.log(title);
}




const listNotes = () => {

    // list down all the notes

    const notes = loadNotes();

    console.log("\n");
    console.log(chalk.cyan.bold.inverse('Your notes '));
    console.log("\n");

    notes.forEach((note) => {
        console.log(note.title);
    });

}




const readNotes = (title) => {
   
    // read a specific note with the mentioned title

    const notes = loadNotes();

    const noteToread = notes.find((note) => note.title === title);

    if (noteToread) {

        console.log("\n");
        console.log(chalk.blue.bold.inverse("Title: " + noteToread.title));
        console.log("\n");
        console.log(chalk.white.bold.inverse("Body: " + noteToread.body));
        console.log("\n");

    } else {

        console.log("\n");
        console.log(chalk.red.bold.inverse("Nothing to read, title doesn't exist but feel free to create one!"));
        console.log("\n");

    }

    // console.log("Read Note!");

}




const saveNotes = (notes) => {

    // to save the note if it's note being created.

    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);

}


const loadNotes = () => {

    // load all the notes.

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