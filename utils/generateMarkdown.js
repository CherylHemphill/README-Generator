// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Define the license badges and their corresponding URLs
  const licenseBadges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'GNU GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'Apache License 2.0' : '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'BSD 3-Claus License' : '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  };

  // Check if the license exists in the licenseBadges object
  if (license in licenseBadges) {
    return licenseBadges[license];
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Define the license URLs
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GNU GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache License 2.0' : 'https://www.apache.org/licenses/LICENSE-2.0',
    'BSD 3-Clause License' : 'https://opensource.org/licenses/BSD-3-Clause'
  
  };

  // Check if the license exists in the licenseLinks object
  if (license in licenseLinks) {
    return `[${license}](${licenseLinks[license]})`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Check if the license is provided
  if (license) {
    return `
## License

This project is licensed under the ${renderLicenseLink(license)} license. Click the badge above for more details.
`;
  } else {
    return '';
  }
}


// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
${data.tableOfContents}

## Installation
${data.installation}

## Usage
${data.usage}

${licenseSection}

## Contributing
${data.contributing}

## Tests
${data.tests}
`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown,
};
