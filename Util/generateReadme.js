//Function for getting the answers from the index file and generating the README.
function generateReadme(answers) {
    return `
    #Title
    ${answers.Title}
    
    
    
    ## Description
    ${answers.Description}
    

    
    ## Table of Contents
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributing](#Contributing)
    * [Tests](#Tests)
    * [Questions](#Questions)
    
    
    
    ## Installation
    ${answers.Installation}
    

    
    ## Usage
    ${answers.Usage}
    

    
    ##License
    ${answers.License}
    

    
    ## Contributing
    ${answers.Contributing}
    

    
    ## Tests
    ${answers.Tests}
    

    
    ## Questions
    ${"Git-Hub: ", answers.Questions}
    ${"Link to my LinkedIn: ", answers.LinkedIn}
    ${"For any further questions please contact me via email: ", answers.Email}
    
    `;
}

//Exporting this function to be imported into the index.js file.
module.exports = {generateReadme}