const chalk = require('chalk');
const validator = require('validator');
const yargs = require('yargs');

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
    handler: function (args) {
        console.log('Title = ' + args.title);
        console.log('Body = ' + args.body);
    }
});

// Create remove functionality


yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note!')
    }
});

// Create read notes

yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler: function(){
        console.log('Reading the note!');
    }
});

// create list of the notes

yargs.command({
    command: 'list',
    describe: 'List of the notes',
    handler: function(){
        console.log('Listing down all the notes!');
    }
});


yargs.parse();


// console.log(yargs.argv);






