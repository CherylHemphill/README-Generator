// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const {
    renderLicenseBadge,
    renderLicenseLink,
    renderLicenseSection,
    generateMarkdown,
  } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the Title of your Project?',
    },
    {
      type: 'input',
      name: 'description',
      message:
        'What does your application accomplish & what motivated you to create this application?',
    },
    {
      type: 'checkbox',
      name: 'tableOfContents',
      message: 'Would you like to include a Table of Contents?',
      choices: [
        'Description',
        'Installation',
        'Usage',
        'License',
        'Contributing',
        'Tests',
        'Questions',
      ],
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your application?',
    },
    {
      type: 'input',
      name: 'usage',
      message:
        'Provide instructions and examples for use. Including a screenshot or video demo can be done by creating an assets/image folder then using the syntax ![alt text](assets/images/screenshot.png). Video demos can also be added by dragging and dropping your video into the README from your GitHub repo page.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'BSD 3-Claus License', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message:
        '[Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard for adding contributing but you can write your own if you prefer.',
    },
    {
      type: 'input',
      name: 'tests',
      message:
        'Provide examples of how to run tests for your application or you can input N/A',
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ]);
};

function generateREADME(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  const tableOfContents = data.tableOfContents.map((item) => `* [${item}](#${item.toLowerCase()})`).join('\n');

  const readmeContent = `
# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
${tableOfContents}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.licenseContent}

${licenseSection}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me via:
* GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
* Email: ${data.email}
`;

  return readmeContent;
}

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  const readmeContent = generateREADME(data);

  writeFile(fileName, readmeContent)
    .then(() => {
      console.log(`Successfully generated ${fileName}`);
    })
    .catch((error) => {
      console.error('Error generating README:', error);
    });
}

// TODO: Create a function to initialize app

function init() {
    promptUser()
      .then((data) => {
        const fileName = 'README.md';
        writeToFile(fileName, data);
      })
      .catch((error) => {
        console.error('Error prompting user:', error);
      });
  }
  
  // Function call to initialize app

  init();