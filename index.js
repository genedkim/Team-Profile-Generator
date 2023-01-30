const fs = require('fs'); 
const inquirer = require('inquirer');

const selectRole = () => {
    inquirer.prompt ([
        {
            type: "list",
            name: "role",
            message: "Please select the role of the employee you would like to add.",
            choices: ["manager", "engineer", "intern"]
        }
    ]).then((response) => {
        addEmployee(response.role);
    })
}

const addEmployee = (role) => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: `Please enter the name of the ${role} you would like to add.`
        }, {
            type: "input",
            name: "id",
            message: `Please enter the ${role}'s employee ID number.`
        }, {
            type: "input",
            name: "email",
            message: `Please enter the ${role}'s email address.`
        }
        ])
    switch(role) {
        case "manager":
            inquirer.prompt ([
                {
                    type: "input",
                    name: "officeNumber",
                    message: "Please enter the manager's office number."
                }
            ])
            break;
        case "engineer":
            inquirer.prompt ([
                {
                    type: "input",
                    name: "officeNumber",
                    message: "Please enter the manager's office number."
                }
            ])
            break;
        case "intern":
            inquirer.prompt ([
                {
                    type: "input",
                    name: "officeNumber",
                    message: "Please enter the manager's office number."
                }
            ])
            break;    

    }


}