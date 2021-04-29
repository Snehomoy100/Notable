const chalk = require('chalk');

// all the data is being saved inside of the notes.json file.

// const validator = require('validator');


const { argv } = require('yargs');

const yargs = require('yargs');

const notes = require('./notes');



// Command line arguement using process.argv

// Create add functionality

// add, remove, read & list all the notes.

yargs.command({

    command: 'add',
    describe: 'Add a note',
    builder: {
      title: {
          describe: 'Note Title',
          demandOption: true,
          type: 'string'
      },
      body: {
          describe: 'Note Body',
          demandOption: true,
          type: 'string'
      }  
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
});

// Create remove functionality


yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
});

// Create read notes

yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler(argv) {
        notes.readNotes(argv.title);
    }
});

// create list of the notes

yargs.command({
    command: 'list',
    describe: 'List of the notes',
    handler() {
        notes.listNotes()
    }
});


yargs.parse();


// console.log(yargs.argv);






