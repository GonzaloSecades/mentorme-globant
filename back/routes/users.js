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
  let skillsArray = [], i = 0, j = 0, k = 0 //skillsArray va a contener los skills a matchear del usuario seleccionado.

  const selectedUser = await User.findById(id).select('-__v').populate('skills', '-__v').lean()
  const users = await User.find({}).select('-__v').populate('skills', '-__v').lean()
  selectedUser.skills.forEach(e => skillsArray.push(e._id.toString()))
  
  //crea la condición de búsqueda
  let condition = users[i].skills[j]._id.toString() === skillsArray[k]
  if (req.query.country) condition = condition && users[i].country === req.query.country
  
  //itera sobre el array de users y pushea a un nuevo array resultado los usuarios que cumplan la condición de búsqueda. Hecho con simple fors para mejorar velocidad vs metodos de js
  let result = [], aux = false
  for (i; i < users.length; i++) {
    for (j; j < users[i].skills.length; j++) {
      for (k; k < skillsArray.length; k++) {
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

// const matchedUsers = await User.find({skills: {'_id': {$in: skillsArray}}})
// // const matchedUsers = await User.find({$or: [{"skills._id": skillsArray[0]}, {"skills._id": skillsArray[1]}]})
// console.log("matchedUsers: ", matchedUsers)
// const matchedUsers = await User.find({"skills._id": {$in: skillsArray}})
// res.send(matchedUsers)

//db.inventory.find( { "instock.qty": { $gt: 10,  $lte: 20 } } )


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