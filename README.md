# Team-Profile-Generator
Repository for UWCB week 10 challenge Object-Oriented Programming: Team Profile Generator

## Description
For the week 10 challenge I created a Team Profile Generator application that runs on the CLI and prompts users using inquirer to build an html file for their team profile. 

## Installation
To run this program first clone this repository. Open the root directory in the terminal and run
```bash
npm i
```
to install the necessary dependencies (inquirer and jest) to run the program. Jest will allow you to run
```bash
npm run test
```
to run the test.js files for the class constructors.

## Usage
The following link is a video that shows an example of how to use the application in the command line:

[How to Use Team Profile Generator](https://drive.google.com/file/d/1oj5ZMNOP4m5PZ-R3MNOmeyHCHZEtwDMV/view)

Once everything is properly installed, in the CLI run
```bash
node index.js
```
The user will then be given a list of roles to choose from that they would like to add to the profile.

Once a role is chosen they will first be asked to enter 3 questions (the same 3 for all roles). The user will need to enter the employee's name, employee ID number and email address. Then based on the chosen role they will be asked one last question.

If 'Manager' was chosen the user will need to enter the manager's office number.

If 'Engineer' was chosen he user will need to enter the engineer's github ID.

If 'Intern' was chosen the user will need to enter the intern's school.

Once the user has input all the information for each of the employee's on their team they can select the 'Finished' option to generate the html and quit the application. The file will be found in the ./dist folder and be named team.html.

## Credits
Application created by Gene Kim

Email: [genedanielkim@gmail.com](mailto:genedanielkim@gmail.com)

## License
N/A

