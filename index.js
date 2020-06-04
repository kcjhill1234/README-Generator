const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFile = require("./utils/writeFile");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter a title.",
    default: "Project",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description",
    default: "TODO write description",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter how to use project",
  },
  {
    type: "input",
    name: "license",
    message: "Please enter license information",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please enter contributors",
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter test information",
  },
];

async function writeToFile(fileName, data) {
  const filepath = path.resolve(__dirname, "dist", fileName);
  await writeFile(filepath, data);
}

async function init() {
  const answers = await inquirer.prompt(questions);
  await writeToFile("README.md", generateMarkdown(answers));
}

init();
