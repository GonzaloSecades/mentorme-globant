const User = require("../models/user")
const Skill = require("../models/skill")
const ObjectId = require('mongodb').ObjectId;
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  User.find({}).select('-__v')
    .populate('skills', '-_id -__v')
    .then(data => res.status(200).send(data))
    .catch(err => console.log(err))
})

router.get('/:userId', (req, res) => {
  console.log("entro a singleUser", req.params.userId)
  const id = ObjectId(req.params.userId)
  User.findById(id).select('-_id -__v')
    .populate('skills', '-_id -__v')
    .then(data => {
      console.log(data)
      res.status(200).send(data)})
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