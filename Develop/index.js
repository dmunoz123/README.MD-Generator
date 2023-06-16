// all packages/files used
const inquirer = require("inquirer");
const fs = require("fs");
const markDown = require("./utils/generateMarkdown"); 

// array containing questions to prompt user with
const questions = [
  { type: "input", name: "username", message: "What is your github username?" },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message:
      "What would you like to name your GitHub repository? (typically the same as the project title!)",
  },
  {
    type: "input",
    name: "description",
    message:
      "Please provide a short description about your project, i.e., What were your motivations/goals/expected outcomes? What did you learn/accomplish?",
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please describe the projects installation process. What commands must a user input in order to get this code functioning locally",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message:
      "In a few words, describe your projects usage. How will this benefit the user? Provide screenshots if necessary.",
  },
  {
    type: "input",
    name: "collaborators",
    message:
      "Please list any and all collaborators. If you used third-party assets, please cite them here",
  },
  {
    type: "list",
    name: "license",
    message:
      "Do you want your project to include a license? Please choose an option.",
    choices: [
      "MIT",
      "APACHE2.0",
      "GPL3.0",
      "BSD3",
      "ECL2.0",
      "GPL",
      "No License",
    ],
  },
  {
    type: "input",
    name: "features",
    message:
      "If your project includes many different features, please list them here.",
  },
];

// use writefileSync, although bad practice, as it runs synchronously with main thread and can block main execution
// usage of synchronous methods here is preferred as it is used to enable user input at runtime.
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

// upon initialization, prompt the user with questions, use data to create new file and print out success statement afterwards :) 
function init() {
  inquirer.prompt(questions).then((userInput) => {
    writeToFile("README.md", markDown({ ...userInput }));
    console.log('File has been succesfully created, please refer to relative file path and look for file named README');
  });
}

// Function call to initialize app
init();
