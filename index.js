const inquirer = require('inquirer');
const fs = require('fs');
// connects index to other js files
const generateHtml = require('./generateHtml');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// array to hold employees after making them
const team = [];

// starts the application
function genesis() {
    inquirer.prompt(
        {
            name: "genesis",
            type: "list",
            choices: ['Add a new team manager', 'Finish building team']
        }
    ).then(
        answer => {
            if(answer.genesis === 'Add a new team manager') {
                addManager();
            } else {
                console.log("Team complete!");
            }
        }
    )
};

function addManager() {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter new Manager name:'
        },
        {
            name: 'id',
            type: 'number',
            message: 'Enter new employee id:'
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter manager full email:'
        },
        {
            name: 'officeNumber',
            type: 'number',
            message: 'Enter manager office number:'
        },
        {
            name: "addEmployee",
            type: "list",
            choices: ['Add a new team member', 'Finish building team']
        }
       
    ]).then(
        answer => {
            const newManager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
            team.push(newManager); 

            if(answer.addEmployee === 'Add a new team member') {
                managerNext();
            } else if(answer.addEmployee === 'Finish building team' ) {
                console.log("Team complete!");
                writeToFile("index.html", team);
            }    
        }
    )
};

function managerNext() {
    inquirer.prompt([
        {
            name: "managerNext",
            type: "list",
            choices: ['Add an engineer', 'Add an intern', 'Finish building team']
        }
    ]
    ).then(
        answer => {
            if(answer.managerNext === 'Add an engineer') {
                addEngineer();
            } else if(answer.managerNext === 'Add an intern') {
                addIntern();
            } else {
                console.log("Team complete!");
                writeToFile("index.html", team);
            }
        }
    )
        
};

function addEngineer() {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter new engineer name:'
        },
        {
            name: 'id',
            type: 'number',
            message: 'Enter Engineer id:'
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter engineer email:'
        },
        {
            name: 'github',
            type: 'input',
            message: 'Enter github username:'
        },
        {
            name: "addEmployee",
            type: "list",
            choices: ['Add a new team member', 'Finish building team']
        }
       
    ]).then(
        answer => {
            const newEngineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
            team.push(newEngineer);
            if(answer.addEmployee === 'Add a new team member') {
                managerNext();
            }
            else
            if(answer.addEmployee === 'Finish building team') {
                console.log("Team complete!");
                writeToFile("index.html", team);
                return;
            }
        }
    )
};

function addIntern() {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter new intern name:'
        },
        {
            name: 'id',
            type: 'number',
            message: 'Enter intern id:'
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter full intern email:'
        },
        {
            name: 'school',
            type: 'input',
            message: 'Enter intern school name:'
        },
        {
            name: "addEmployee",
            type: "list",
            choices: ['Add a new team member', 'Finish building team']
        }
       
    ]).then(
        answer=>{
            const newIntern = new Intern(answer.name, answer.id, answer.email, answer.school);
                team.push(newIntern);
            if(answer.addEmployee === 'Add a new team member') {
                managerNext();
            }
            else
            if(answer.addEmployee === 'Finish building team') {
                console.log("Team complete!");
                writeToFile("index.html",team);
                return;
            }            
        }
    )
};
function writeToFile(fileName, data) {  
    const htmldata = generateHtml(data);
   fs.writeFileSync(fileName, htmldata, (err) => err ? console.log(err) : console.log('File Created!'));
  };

genesis();