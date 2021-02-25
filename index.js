const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("markdown.js");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
      type: "input",
      message: "What is the project title?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the project site URL?",
      name: "url",
    },
    {
      type: "input",
      message: "Enter in a project description:",
      name: "description",
    },
    {
      type: "input",
      message: "Enter in installation instructions for the project:",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter in the usage information for the project:",
      name: "usage",
    },
    {
      type: "input",
      message: "Would you like to credit anyone for the project?",
      name: "credits",
    },
    {
      type: "input",
      message: "Enter in the test instructions for the project:",
      name: "tests",
    },
    {
      type: "list",
      message: "Choose a license from the following list:",
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD T-Clause 'Simplified' License",
        "BSD 3-Clause 'New' or 'Revised' License",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v2.1",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "GNU Lesser General Public License v3.0",
        "Mozilla Public License 2.0",
        "The Unilicense",
      ],
      name: "license",
    },
    {
      type: "input",
      message: "What is your GitHub username information?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
  ];