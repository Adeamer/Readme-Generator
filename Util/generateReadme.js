//Function for getting the answers from the index file and generating the README.
function generateReadme(answers) {
    return `
# ${answers.Title}
    
    
## Description
    ${answers.Description}
    

    
## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [Questions](#Questions)
    
    
    
## Installation
    ${answers.Installation}
    

    
## Usage
    ${answers.Usage}
    

    
## Licence  
${answers.Licence}
    

    
## Contributing
    ${answers.Contributing}
    

    
## Tests
    ${answers.Tests}
    

    
## Questions
Git-Hub: ${answers.Questions}  
Link to my LinkedIn: ${answers.LinkedIn}  
For any further questions please contact me via email: ${answers.Email}
    
    `;
}

//Exporting this function to be imported into the index.js file.
module.exports = {generateReadme}