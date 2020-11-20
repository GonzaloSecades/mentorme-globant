const User = require("../models/user")
const Skill = require("../models/skill")
const ObjectId = require('mongodb').ObjectId;
const express = require("express");
const router = express.Router();

router.get('/mentees', (req, res) => {
  User.find({type: "mentee"}).select('-__v')
    .populate('skills', '-_id -__v')
    .then(data => {
      console.log(data)
      res.status(200).send(data)
    })
    .catch(err => console.log(err))
})

router.get('/mentors', (req, res) => {
  User.find({type: "mentor"}).select('-__v')
    .populate('skills', '-_id -__v')
    .then(data => {
      console.log(data)
      res.status(200).send(data)
    })
    .catch(err => console.log(err))
})

router.get('/:userId/match', async (req, res) => {
  const id = ObjectId(req.params.userId)
  let skillsToLearnArr = []//va a contener los skills a matchear del usuario seleccionado.

  const selectedUser = await User.findById(id).select('-__v').populate('skills', '-__v').lean()
  const users = await User.find({}).select('-__v').populate('skills', '-__v').lean()
  selectedUser.skills.forEach(e => skillsToLearnArr.push(e._id.toString()))

  //itera sobre el array de users y pushea a un nuevo array resultado los usuarios que cumplan la condición de búsqueda
  let user, skillToLearnId, userSkillId, aux = false, result = [];
  for (let i = 0; i < users.length; i++) {
    user = users[i]

    for (let j = 0; j < user.skills.length; j++) {
      userSkillId = user.skills[j]._id.toString()

      for (let k = 0; k < skillsToLearnArr.length; k++) {
        skillToLearnId = skillsToLearnArr[k]

        let condition = userSkillId === skillToLearnId

        //conditions filters
        if (req.query.country) condition = condition && user.country === req.query.country
        if (req.query.type) condition = condition && user.type === req.query.type

        //construction of JSON
        if (condition) {
          result.push(users[i]);
          aux = true
          break;
        }
      }
      if (aux) {
        aux = false
        break;
      }
    }
  }
  res.status(200).send(result)
})

router.get('/:userId', (req, res) => {
  const id = ObjectId(req.params.userId)
  User.findById(id).select('-_id -__v')
    .populate('skills skillsToLearn', '-__v')
    .then(data => {
      console.log(data)
      res.status(200).send(data)
    })
    .catch(err => console.log(err))
})

router.get('/', (req, res) => {
  User.find({}).select('-__v').lean()
    .populate('skills skillsToLearn', '-_id -__v')
    .then(data => res.status(200).send(data))
    .catch(err => console.log(err))
})







/*
/* fetch all users *
GET /users 

/* fetch specific user *
GET /users/:userId

/* create new user *
POST /users 

/* edit specific user 
PUT /users/:userId

delete specific user 
DELETE /users/:userId

convenciones de rutas
https://restfulapi.net/resource-naming/
*/



router.get('/test', (req, res) => {
  Skill.find({})
    .then(data => res.status(200).send(data))
    .catch(err => console.log(err))
})



module.exports = router;