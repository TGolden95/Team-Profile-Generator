const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquire = require("inquirer");
const fs = require("fs");
const path = require("path");
const htmlgenerator = require("./src/htmlgenerator.js");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const createManager = () => {
  inquire
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the Manager's Name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the Manager's id?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the Manager's email?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the Manager's office number?",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.managerName,
        response.managerId,
        response.managerEmail,
        response.managerOfficeNumber
      );
      teamMembers.push(manager);
      console.log(teamMembers);
      createTeam();
    });
};
createManager();

function createTeam() {
  inquire
    .prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.memberChoice) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        default:
          buildTeam();
      }
    });
}

const createEngineer = () => {
  inquire
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the Engineer's Name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the Engineer's id?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the Engineer's email?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the Engineer's Github username?",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.engineerName,
        response.engineerId,
        response.engineerEmail,
        response.engineerGithub
      );
      teamMembers.push(engineer);
      console.log(teamMembers);
      createTeam();
    });
};

const createIntern = () => {
  inquire
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the Intern's Name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is the Intern's id?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the Intern's email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What school does the Intern attend?",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.internName,
        response.internId,
        response.internEmail,
        response.internSchool
      );
      teamMembers.push(intern);
      console.log(teamMembers);
      createTeam();
    });
};

const buildTeam = () => {
  console.log("Team is complete!");
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, htmlgenerator(teamMembers), "utf-8");
};
