const fs = require('fs'); 
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const team = [];

const selectRole = () => {
    inquirer.prompt ([
        {
            type: "list",
            name: "role",
            message: "Please select the role of the employee you would like to add.",
            choices: ["manager", "engineer", "intern", "finished"]
        }
    ]).then((response) => {
        switch(response.role) {
            case "manager":
                addManager();
                break;
            case "engineer":
                addEngineer();
                break;
            case "intern":
                addIntern();
                break;
            case "finished":
                console.log(team);
                break;
        }
    })
}

const addManager = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: `Please enter the name of the manager you would like to add.`
        }, {
            type: "input",
            name: "id",
            message: `Please enter the manager's employee ID number.`
        }, {
            type: "input",
            name: "email",
            message: `Please enter the manager's email address.`
        }, {
            type: "input",
            name: "officeNumber",
            message: "Please enter the manager's office number."
        }
        ]).then((response) => {
            let employee = new Manager(response.name, response.id, response.email, response.officeNumber);
            team.push(employee);
            selectRole();
        })
}

const addEngineer = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: `Please enter the name of the engineer you would like to add.`
        }, {
            type: "input",
            name: "id",
            message: `Please enter the engineer's employee ID number.`
        }, {
            type: "input",
            name: "email",
            message: `Please enter the engineer's email address.`
        }, {
            type: "input",
            name: "github",
            message: "Please enter the engineer's github URL."
        }
        ]).then((response) => {
            let employee = new Engineer(response.name, response.id, response.email, response.github);
            team.push(employee);
            selectRole();
        })
}

const addIntern = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: `Please enter the name of the intern you would like to add.`
        }, {
            type: "input",
            name: "id",
            message: `Please enter the intern's employee ID number.`
        }, {
            type: "input",
            name: "email",
            message: `Please enter the intern's email address.`
        }, {
            type: "input",
            name: "school",
            message: "Please enter the intern's school."
        }
        ]).then((response) => {
            let employee = new Intern(response.name, response.id, response.email, response.school);
            team.push(employee);
            selectRole();
        })
}



const generateHTML = () => {
    fs.writeFileSync('./dist/team.html', `
    
    `);
    for (i=0; i<team.length; i++) {
        fs.appendFileSync('./dist/team.html', `
        
        `);
    }
    fs.appendFileSync('./dist/team.html', `

    `);
}

selectRole();