const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquire = require("inquirer");

const teamMembers = [];

const createManager = () => {
  inquire
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the Managers Name?",
      },
    ])
    .then((response) => {
      const manager = new Manager(response.managerName);
      teamMembers.push(manager);
      console.log(teamMembers);
    });
};
createManager();
