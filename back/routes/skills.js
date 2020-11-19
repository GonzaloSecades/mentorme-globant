//const User = require("../models/user")
const Skill = require("../models/skill")
const ObjectId = require('mongodb').ObjectId;
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  Skill.find({}).select('-__v')
    .then(data => res.status(200).send(data))
    .catch(err => console.log(err))
})

router.get('/:skillId', (req, res) => {
  const id = ObjectId(req.params.skillId)
  Skill.findById(id).select('-_id -__v')
    .then(data => {
      console.log(data)
      res.status(200).send(data)})
    .catch(err => console.log(err))
})

module.exports = router;