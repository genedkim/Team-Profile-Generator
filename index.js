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
                generateHTML();
                console.log('Team profile generated successfully! Check dist folder for team.html file.')
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
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
            <title>Team Profile</title>
        </head>
        <body>
            <div class="container-fluid bg-info">
                <h1 class="text-center text-white">Team Profile</h1>
            </div>
            <div class="container py-5">
                <div class="row col-12 d-flex justify-content-center">
    `);
    for (i=0; i<team.length; i++) {
        switch (team[i].constructor.name) {
            case "Manager":
                fs.appendFileSync('./dist/team.html', `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <div class="card-header bg-secondary text-white">
                                <h3 class="card-title"> ${team[i].name}</h3>
                                <h3 class="card-subtitle mb-2"> ${team[i].constructor.name}</h3>
                            </div>
                            <div class="card-body">
                                <p>Employee ID: ${team[i].id}</p>
                                <p>Email: ${team[i].email}</p>
                                <p>Office Number: ${team[i].officeNumber}</p>
                            </div>
                        </div>
                    </div>
                `);
                break;
            case "Engineer":
                fs.appendFileSync('./dist/team.html', `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <div class="card-header bg-secondary text-white">
                                <h3 class="card-title"> ${team[i].name}</h3>
                                <h3 class="card-subtitle mb-2"> ${team[i].constructor.name}</h3>
                            </div>
                            <div class="card-body">
                                <p>Employee ID: ${team[i].id}</p>
                                <p>Email: ${team[i].email}</p>
                                <p>GitHub: ${team[i].github}</p>
                            </div>
                        </div>
                    </div>
                `);
                break;
            case "Intern":
                fs.appendFileSync('./dist/team.html', `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <div class="card-header bg-secondary text-white">
                                <h3 class="card-title"> ${team[i].name}</h3>
                                <h3 class="card-subtitle mb-2"> ${team[i].constructor.name}</h3>
                            </div>
                            <div class="card-body">
                                <p>Employee ID: ${team[i].id}</p>
                                <p>Email: ${team[i].email}</p>
                                <p>School: ${team[i].school}</p>
                            </div>
                        </div>
                    </div>
                `);
                break;
        }
    }
    fs.appendFileSync('./dist/team.html', `
            </div>
            </div>
        </body>
        </html>
    `);
}

selectRole();