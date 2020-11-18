const chalk = require("chalk");
const Skill = require("../models/skill");
require("../config/index");

const log = (...args) => console.log(chalk.yellow.bgBlue(...args));

log("Seeding skills");

Skill.insertMany([
  { name: "mongo", category: "backEnd"},
  { name: "sequelize", category: "backEnd"},
  { name: "node", category: "frontEnd"},
  { name: "docker", category: "devOps"},
]).then(() => {
  log("Skills generated!");
  process.exit();
});
