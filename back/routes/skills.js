// const User = require("../models/user")
const express = require("express")
const _ = require("lodash")
const { Skill } = require("../models/skill")

const router = express.Router()

router.get("/test", (req, res) => {
  const { name } = req.body
  Skill.findOne({ name })
    .select("-__v")
    .lean()
    .then((data) => {
      console.log(data)
      res.status(200).send(data)
    })
    .catch((err) => console.log(err))
})

router.get("/:skillId", (req, res) => {
  const _id = req.params.skillId
  Skill.findOne({ _id })
    .select("-_id -__v")
    .lean()
    .then((data) => {
      console.log(data)
      res.status(200).send(data)
    })
    .catch((err) => console.log(err))
})

router.get("/", (req, res) => {
  if (!_.isEmpty(req.query)) {
    const pageOptions = {
      page: parseInt(req.query.page, 10) || 0,
      limit: parseInt(req.query.limit, 10) || 10,
    }

    Skill.find()
      .lean()
      .select("-__v")
      .skip(pageOptions.page * pageOptions.limit)
      .limit(pageOptions.limit)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(500).send(err))
  } else {
    Skill.find({})
      .lean()
      .select("-__v")
      .then((data) => res.status(200).send(data))
      .catch((err) => console.log(err))
  }
})

module.exports = router
