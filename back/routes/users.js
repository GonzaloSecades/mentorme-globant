const User = require("../models/user")
const Skill = require("../models/skill")
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  console.log("entro a /")
  if (req.body.username) {
    
  }
  else {
    User.find({}).select('-_id -__v')
      .populate('skills', '-_id -__v')
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err))
  }

})

router.get('/:userId', (req, res) => {
  console.log("entro a /")
  User.find({}).select('-_id -__v')
    .populate('skills', '-_id -__v')
    .then(data => res.status(200).send(data))
    .catch(err => console.log(err))
})


router.get('/test', (req, res) => {
  Skill.find({})
    .then(data => res.status(200).send(data))
    .catch(err => console.log(err))
})



module.exports = router;