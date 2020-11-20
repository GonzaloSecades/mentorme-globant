
const Skill = require("./models/skill");
const User = require("./models/user");
const chalk = require("chalk");
const log = (...args) => console.log(chalk.yellow(...args));
require("./config/index");

async function seed() {
  const admin = {firstName: "admin", lastName: "admin", country: "Argentina", email: "admin@admin.com", password: 1, accessLevel: "admin", type: "admin"};
  const mentor1 = {firstName: "Juan", lastName: "Loza", country: "Argentina", email: "mentor1@gmail.com", password: 1, accessLevel: "user", type: "mentor"};
  const mentor2 = {firstName: "José", lastName: "Martinez", country: "Argentina", email: "mentor2@gmail.com", password: 1, accessLevel: "user", type: "mentor"};
  const mentee1 = {firstName: "Barbara", lastName: "Lopez", country: "Argentina", email: "barbaralopez@gmail.com", password: 1, accessLevel: "user", type: "mentee"};
  const mentee2 = {firstName: "Josefina", lastName: "Salvador", country: "Ecuador", email: "josefinasalvador@gmail.com", password: 1, accessLevel: "user", type: "mentee"};
  const mentee3 = {firstName: "Marco", lastName: "Alvarez", country: "Bolivia", email: "marcoalvarez@gmail.com", password: 1, accessLevel: "user", type: "mentee"};
  const mentee4 = {firstName: "Carlos", lastName: "Gomez Bolaños", country: "Paraguay", email: "carlosgomez@gmail.com", password: 1, accessLevel: "user", type: "mentee"};

  await Promise.all([User.deleteMany({}), Skill.deleteMany({})])
  await Promise.all([
    User.insertMany([admin, mentor1, mentor2, mentee1, mentee2, mentee3, mentee4])
      .then(() => log("Skills generated!")).catch(err => console.log(err)),
    Skill.insertMany([
      {name: "mongo", category: "backEnd"},
      {name: "sequelize", category: "backEnd"},
      {name: "node", category: "frontEnd"},
      {name: "docker", category: "devOps"},
    ]).then(() => log("Skills generated!")).catch(err => console.log(err))
  ])
  console.log("users and skills generated")

  Skill.find({}).then(data => {
    console.log(data)
    User.updateMany({country: "Argentina"}, {skills: [data[0]._id, data[1]._id]})
      .then((data) => console.log("completado!!", data))
  })

  Skill.find({}).then(data => {
    console.log(data)
    User.updateMany({country: "Paraguay"}, {skillsToLearn: [data[0]._id, data[1]._id]})
      .then((data) => console.log("completado!!", data))
  })

}
seed()
//User.update({skills:[]}).then((data)=> console.log(data))

//     process.exit();