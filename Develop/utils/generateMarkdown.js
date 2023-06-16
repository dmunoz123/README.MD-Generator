// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "No License") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "No License") {
    return `  * [License](#license)`;
  }
  return "";
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "No License") {
    return `## License
    This project is licensed with: ${license}`;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [Features](#features)

${renderLicenseLink(data.license)}

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  When initializing the project, please install all necessary dependencies using your terminal to run:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Features

  ${data.features}

  ## Contributing

  ${data.collaborators}

  ## Tests

  ${data.test}

  ## Questions

  If you have any questions, comments, or concerns regarding my repository, feel free to contact me at ${
    data.email
  }

  View some of my other projects on [${data.username}](https://github.com/${
    data.username
  }/).
`;
}

//export to be able to use in another file
module.exports = generateMarkdown;
