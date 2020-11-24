//const User = require("../models/user")
const {Skill} = require("../models/skill")
const express = require("express");
const router = express.Router();


router.get('/test', (req, res) => {
  const name = req.body.name
  Skill.findOne({name}).select('-__v').lean()
    .then(data => {
      console.log(data)
      res.status(200).send(data)})
    .catch(err => console.log(err))
})

router.get('/:skillId', (req, res) => {
  const _id = req.params.skillId
  Skill.findOne({_id}).select('-_id -__v').lean()
    .then(data => {
      console.log(data)
      res.status(200).send(data)})
    .catch(err => console.log(err))
})

router.get('/', (req, res) => {
  Skill.find({}).lean().select('-__v')
    .then(data => res.status(200).send(data))
    .catch(err => console.log(err))
})

module.exports = router;