const chalk = require("chalk");
const User = require("../models/user");
require("../config/index");

const log = (...args) => console.log(chalk.yellow.bgBlue(...args));

const admin = { name: "admin", country: "Argentina", email: "admin@admin.com", password: 1, accessLevel:"admin", type: "admin" };

const mentor1 = { name: "Juan Loza", country: "Argentina", email: "mentor1@gmail.com", password: 1, accessLevel:"user", type: "mentor" };
const mentor2 = { name: "José Martinez", country: "Argentina", email: "mentor2@gmail.com", password: 1, accessLevel:"user", type: "mentor" };

const mentee1 = { name: "Barbara Lopez", country: "Argentina", email: "barbaralopez@gmail.com", password: 1, accessLevel:"user", type: "mentee" };
const mentee2 = { name: "Josefina Salvador", country: "Ecuador", email: "josefinasalvador@gmail.com", password: 1, accessLevel:"user", type: "mentee" };
const mentee3 = { name: "Marco Alvarez", country: "Bolivia", email: "marcoalvarez@gmail.com", password: 1, accessLevel:"user", type: "mentee", userSkills:["5fb585792e687c87d4a1f5f3"] };
const mentee4 = { name: "Carlos Gomez Bolaños", country: "Paraguay", email: "carlosgomez@gmail.com", password: 1, accessLevel:"user", type: "mentee", userSkills:["5fb585792e687c87d4a1f5f3","5fb585792e687c87d4a1f5f4"] };

log("Seeding users");


User.insertMany([admin, mentor1, mentor2, mentee1, mentee2, mentee3, mentee4]).then(() => {
  log("Users generated!");
  process.exit();
});