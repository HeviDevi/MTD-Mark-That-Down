import('inquirer')
    .then(inquirerModule => {  

      const inquirer = inquirerModule.default;
      const fs = require('fs');

const licenses = ['MIT', 'Apache', 'GPL', 'BSD', 'None'];

const questions = [
  {
    type: 'input',    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.?',
  }, 
  {
    type: 'input',
    name: 'credits',
    message: 'List your collaborators, if any, with links to their GitHub profiles.',
  },
  {
    type: 'list',
    name:'license',
    message: 'What kind of license does your project have?',
    choices: licenses
  },
  {
    type: 'input',
    name: 'features',
    message: 'What are the features of your project?',
  },
  {
    type: 'input',
    name: 'howToContribute',
    message: 'If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so.',
  },
  {
    type : 'input',
    name: 'email',
    message: 'If you would like to make your email available for questions, please provide it:'
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'If you would like to link your Github profile, please enter your username:'
  }
  
];

inquirer.prompt(questions)
  .then((response) => {
  const newREADME = `
## ${response.title}

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

## Credits

${response.credits}

## License

${response.license}

## How to Contribute

${response.howToContribute}

## Questions
Email me with questions at:
${response.email}

or visit my GitHub profile:
https://github.com/${response.githubUsername}
  `;

  fs.writeFile('README.md', newREADME, (err) =>
    err ? console.log(err) : console.log('Consider It MARKED DOWN!')
        )});
      });