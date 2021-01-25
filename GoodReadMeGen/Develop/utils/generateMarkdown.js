
function generateMarkdown(data) {
    console.log(data);
    return `
  # ${data.project}
         ${data.email}
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  ## Description
       ${data.description}
  ## Table of Contents
  * GitHub Username
  * Project URL
  * Installation
  * Usage
  * Contribution
  * Tests
  * License
  ## GitHub Username
      #${data.name}
  ## Project URl
       ${data.url}
  ## Installation 
       ${data.commands}
  ## License 
  This project is licensed under the ${data.license}
  ## Contributing
       ${data.contribute}
  ## Repo Information
       ${data.repo}
  ## Test
       To run test, run the following command:
       ${data.tests}
  `;
  }
  
  module.exports = generateMarkdown;