// TODO: Include packages needed for this application
var fs = require('fs');
var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create a function to initialize app
function init() {}
//This is the collection of questions asked to the user.
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What should the title be?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What should the description say?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What information should be displayed in the usage section?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What information should be displayed in the installation section?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What people or resources contributed in the creation of this project?',
            name: 'contributions',
        },
        {
            type: 'list',
            message: 'What license is the project protected under? (leave blank for no license)',
            choices: ['MIT', 'GNU', 'Apache', 'None'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'what should the file be called?',
            name: 'fn',
        },
        
    ])
    