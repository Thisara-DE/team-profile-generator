const inquirer = require('inquirer');
const fs = require('fs');

// ----- Prompt Manager section ------
// What is the team manager's name?
// What is the team manager's id?
// What is the team manager's email?
// What is the team manager's office number?
// Which type of team member would you like to add?
    // type: list
    // choices: [Engineer, Intern, I don't want to add any more team members]


const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",
            validate: ManagerName => {
                if(ManagerName) {
                    return true;
                } else {
                    console.log("Please enter the manager's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's ID?",
            validate: ManagerId => {
                if(ManagerId) {
                    return true;
                } else {
                    console.log("Please enter the manager's ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email?",
            validate: ManagerEmail => {
                if(ManagerEmail) {
                    return true;
                } else {
                    console.log("Please enter the manager's email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "What is the team manager's office number?",
            validate: ManagerOffice => {
                if(ManagerOffice) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number");
                    return false;
                }
            } 
        },
        {
            type: 'list',
            name: 'memberAddPrompt',
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]                     
        }
    ]).then()
}



promptManager()
    .then(output => {
        console.log(output);
});
