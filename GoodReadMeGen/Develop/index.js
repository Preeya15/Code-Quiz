const fs = require("fs");
const util = require("util");
const path = require('path')
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


//Create an array of questions for user input

const questions = [{
    type: "input",
    name: "Name",
    message:" What is your Github username?"
},
{
    type: "input",
    name: "Email",
    message:" What is your email?"
},
{
    type: "input",
    name: "url",
    message:" What is the URL of your project?"
},
{
    type: "input",
    name: "Project",
    message:" What is the title of your project?"
},
{
    type: "input",
    name: "Description",
    message:" Please write a short description of your project."
},
{
    type: "input",
    name: "Installation",
    message:" What are the instructions to install the project?"
},
{
    type: "input",
    name: "Usage",
    message:" What does the user need to know about using the project?"
},
{
    type: "input",
    name: "Contribution",
    message:" What does the user need to know about contributing to this project?"
},
{
    type: "input",
    name: "Tests",
    message:" What command needs to be run for testing?"
},
{
    type: "checkbox",
    name: "License",
    message:"Please choose the type of license you have for this project:",
    choices: [
        "MIT",
        "APACHE 2.0",
        "GPL 3.0",
        "None",
    ]
},
];

//function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    fs.writeFile(path.join(process.cwd(), fileName), data, err=> {
        if (err) throw err;
        console.log("Saved")
    });
};

//function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
    //console.log(data);
    writeToFile("README.MD", generateMarkdown(data))
})
};

// Function call to initialize app
init();