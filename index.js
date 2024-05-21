// inquirer is an ES module, not a CommonJS module, so we need to use import() to load it
import("inquirer").then((inquirerModule) => {
  const inquirer = inquirerModule.default;
  const fs = require("fs");

  // used a deconstructed object to import the functions from licenceFunctions.js
  const {
    renderLicenseBadge,
    renderLicenseLink,
    renderLicenseSection,
  } = require("./licenceFunctions");

  //Will be used in the list type question to provide the user with a list of licenses to choose from.
  const licenses = require("./licenceFunctions").licenses;
  const badges = require("./licenceFunctions").badges;
  //Creates an array of objects that are questions for the user to answer when prompted.
  const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.?",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use.",
    },
    {
      type: "input",
      name: "credits",
      message:
        "List your collaborators, if any, with links to their GitHub profiles.",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license does your project have?",
      choices: licenses,
    },
    {
      type: "input",
      name: "features",
      message: "What are the features of your project?",
    },
    {
      type: "input",
      name: "howToContribute",
      message:
        "If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so.",
    },
    {
      type: "input",
      name: "email",
      message:
        "If you would like to make your email available for questions, please provide it:",
    },
    {
      type: "input",
      name: "githubUsername",
      message:
        "If you would like to link your Github profile, please enter your username:",
    },
    {
      type: "input",
      name: "tests",
      message:
        "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
    },
    {
      type: "list",
      name: "newREADME",
      message:
        "Would you like to create a uniquely titled README file or one simply titled README.md?(Choosing the latter will overwrite any existing README.md file)",
      choices: ["README.md", "README[title].md"],
    },
  ];

  inquirer.prompt(questions).then((response) => {
    const newREADME = `
## ${response.title}


${renderLicenseBadge(response.license)}

## Description

${response.description}

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)

## Features

${response.features}

## Installation

${response.installation}

## Usage

${response.usage}

## Credits

${response.credits}

${renderLicenseSection(response.license)}

## How to Contribute

${response.howToContribute}

## Questions

Email me with questions at:
${response.email}

or visit my GitHub profile:
https://github.com/${response.githubUsername}

## Tests

${response.tests}

  `;

    //I added a feature that allows the user to name the README file based on the title of the project.
    //This way the user can create multiple README files for different projects without losing the previous README file.
    //I used the replace method to replace any spaces in the title with an empty string so that the title can be used as a file name

    if (response.newREADME === "README.md") {
      fs.writeFile("README.md", newREADME, (err) =>
        err ? console.log(err) : console.log("Consider It MARKED DOWN!")
      );
    } else if (response.newREADME === "README[title].md") {
      fs.writeFile(
        `README${response.title.replace(/\s/g, "")}.md`,
        newREADME,
        (err) =>
          err ? console.log(err) : console.log("Consider It MARKED DOWN!")
      );
    }
  });
});
