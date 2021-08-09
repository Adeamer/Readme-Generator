//Pulling required packages and file systems into const's.
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const {generateReadme} = require ('./Util/generateReadme');

const writeFileAsync = util.promisify(fs.writeFile);


//Prompting the user with questions for creating the README file.
const Questions = () => {
    inquirer.prompt([
    {
        name:"Title",
        message: "What is the title of your project?",
        type:"input",
    },{
        name:"Description",
        message:"Give a short description of your project?",
        type:"input",
    },{
        name:"Installation",
        message:"What instructions should the user follow to install the application?",
        type:"input",
    },{
        name:"Usage",
        message:"How to use this application?",
        type:"input",
    },{
        name:"Licence",
        message:"What is the license for this project?",
        type:"list",
        choices: [
            "MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", 
            "GPLv3 [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)", 
            "GP [![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)", 
            "bsl-1.0 [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)" , 
            "None"],
    },{
        name:"Contributing",
        message:"How can other users contribute to this project?",
        type:"input",
    },{
        name:"Tests",
        message:"Give instructions for the test",
        type:"input",
    },{
        name:"questions",
        message:"Enter you Git-Hub username.",
        type:"input",
    },{
        name:"LinkedIn",
        message:"Enter you LinkedIn URL.",
        type:"input",
    },{
        name:"Email",
        message:"Enter you Email address",
    }
  ]).then(answers => {
      writToFile(answers)
      console.log("README.md successfully created!")
  }).catch((err) => console.error(err));
};

const writToFile = answers => {
    writeFileAsync("README.md", generateReadme(answers))
};

Questions();