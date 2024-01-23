const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamMembers = [];

function addManager() {
  inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the Managers name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the Managers ID',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the Managers email?',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the Managers office number?',
      },
  ]).then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    menu();
  });
}

function addEngineer() {
  inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the Engineers name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the Engineers id',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the Engineers email?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is the Engineers github?',
      },
  ]).then((answers) => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    teamMembers.push(engineer);
    menu();
  });
}

function addIntern() {
  inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the Interns name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the Interns id',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the Interns email?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is the Interns school?',
      },
  ]).then((answers) => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    teamMembers.push(intern);
    menu();
  });
}

function menu() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: ['Add Engineer', 'Add Intern', 'Finish building the team'],
    },
  ]).then((answers) => {
    if (answers.choice === 'Add Engineer') {
      addEngineer();
    } else if (answers.choice === 'Add Intern') {
      addIntern();
    } else {

      const html = render(teamMembers);

      console.log('HTML generated successfully!');
    }
  });
}

// Start the application
addManager();
