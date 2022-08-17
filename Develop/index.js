// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
// import * as generateMarkdown from './utils/generateMarkdown.js'
// console.log(generateMarkdown);
var licenses = ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and-Distribution'];

// TODO: Create an array of questions for user input
const questions = [
    // Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project',
    },
    // Installation
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
    },
    // Contribution
    {
        type: 'input',
        name: 'contribute',
        message: 'How should people contribute to this project?',
    },
    // Tesing
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project?',
    },
    // License
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and-Distribution', 'None'],
    },
    // Github
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:',
    },
    // Email
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

function generateMarkdown(data) {
    console.log('data.licensing', data.licensing);
    var licensing = data.licensing;
    console.log('licensing', licensing);
    const licString = licensing.toString();
    console.log('licString', licString);
    const licUrl = licString.replace(/-/g,'%20');
    console.log('licUrl', licUrl);
    const licSpace = licString.replace(/-/g,' ');
    console.log('licSpace', licSpace);
    if (licensing.includes('None') || licensing == ''){
        console.log('hello');
        var licBadge = '';
        var licSection = '';
        var licTOC = '';
    } else {
        var licBadge = `![license](https://img.shields.io/badge/license-${licUrl}-blue)`;
        // var licSection = `## License:
        // Covered under "${licSpace}" license`;
        var licSection = '## License: \n'
        + 'Covered under "' + licensing + '" license';
        var licTOC = `- [License](#license)`;
    }

return `# ${data.title}

${licBadge}

## Description:
${data.description}

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
${licTOC}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation:
${data.installation}

## Usage:
${data.usage}

${licSection}

## Contributing:
${data.contribute}

## Tests:
${data.testing}

## Questions:
- Github: [${data.github}](https://github.com/${data.github})
- Email: ${data.email} `;

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Success!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (data) {
        console.log(data);
        writeToFile("README2.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();
