const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

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
    ]);
}

const promptTeamMembers = currentTeam => {
    

    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        },
        {
            type: 'input',
            name: 'empName',
            message: (answer) => `What is the ${answer.employeeType}'s name?`,
            when: (answer) => answer.employeeType === "Engineer" || answer.employeeType === "Intern",
            validate: (empName, answer) => {
                if(empName) {
                    return true;
                } else {
                    console.log(`Please enter ${answer.employeeType}'s name`);
                    return false;
                }
            }            
        },
        {
            type: 'input',
            name: 'empId',
            message: (answer) => `What is the ${answer.employeeType}'s ID?`,
            when: (answer) => answer.employeeType === "Engineer" || answer.employeeType === "Intern",
            validate: (empId, answer) => {
                if(empId) {
                    return true;
                } else {
                    console.log(`Please enter ${answer.employeeType}'s ID`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'empEmail',
            message: (answer) => `What is the ${answer.employeeType}'s email?`,
            when: (answer) => answer.employeeType === "Engineer" || answer.employeeType === "Intern",
            validate: (empEmail, answer) => {
                if(empEmail) {
                    return true;
                } else {
                    console.log(`Please enter ${answer.employeeType}'s email`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engGithub',
            message: (answer) => `What is the ${answer.employeeType}'s GitHub username?`,
            when: (answer) => answer.employeeType === "Engineer",
            validate: (engGithub, answer) => {
                if(engGithub) {
                    return true;
                } else {
                    console.log(`Please enter ${answer.employeeType}'s GitHub username`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: (answer) => `What is the ${answer.employeeType}'s school?`,
            when: (answer) => answer.employeeType === "Intern",
            validate: (internSchool, answer) => {
                if(internSchool) {
                    return true;
                } else {
                    console.log(`Please enter ${answer.employeeType}'s school`);
                    return false;
                }
            }
        }
    ]).then(newMember => {
        currentTeam.push(newMember);               

        if(newMember.employeeType === "I don't want to add any more team members") {
            return currentTeam;
        } else {            
            return promptTeamMembers(currentTeam);
        }
    });
}

promptManager()
    .then(managerData => {
        const teamMembers = [];
        teamMembers.push(managerData);
        return promptTeamMembers(teamMembers);        
    })
    .then(currentTeam => {
        return generatePage(currentTeam)});
    