#!/usr/bin/env node
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFile = require("./utils/writeFile");

const questions = [{
  type: "input",
  name: "title",
  message: "Please enter a title.",
  default: "Project",
}, {
  type: "input",
  name: "description",
  message: "Please enter a description",
  default: "TODO write description",
}, {
  type: "confirm",
  name: "installation",
  message: "Do you want an installation section?",
  default: false
}, {
  type: "confirm",
  name: "usage",
  message: "Do you want a usage section?",
  default: false
}, {
  type: "confirm",
  name: "license",
  message: "Do you want a license section?",
  default: false
}, {
  type: "confirm",
  name: "contributing",
  message: "Do you want a contributors section?",
  default: false
}, {
  type: "confirm",
  name: "tests",
  message: "Do you want a tests section?",
  default: false
}, {
  type: 'confirm',
  name: 'tableOfContents',
  message: 'Do you want a table of contents',
  default: false,
}, {
  type: 'input',
  name: 'username',
  message: 'Please enter username',
}, {
  type: 'input',
  name: 'repository',
  message: 'Please enter name of repository',
}
];

async function init() {
  const answers = await inquirer.prompt(questions);
  const filepath = path.resolve(__dirname, "dist", "README.md");
  await writeFile(filepath, generateMarkdown(answers));

  console.log('\n\nYour README was generated at', filepath);
}

init();
