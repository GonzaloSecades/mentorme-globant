/* eslint-disable no-param-reassign */
const _ = require("lodash")
const User = require("../models/user")

const getUsers = (req, res) => {
  if (!_.isEmpty(req.query)) {
    const pageOptions = {
      page: parseInt(req.query.page, 10) || 0,
      limit: parseInt(req.query.limit, 10) || 10,
    }
    User.find()
      .skip(pageOptions.page * pageOptions.limit)
      .limit(pageOptions.limit)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(500).send(err))
  } else {
    User.find({})
      .lean()
      .then((data) => res.status(200).send(data))
      .catch((err) => console.log(err))
  }
}

const getUser = (req, res) => {
  User.findOne({ _id: req.params.userId })
    .select("-_id -__v")
    .then((data) => res.status(200).send(data))
    .catch((err) => console.log(err))
}

const matchMentor = async (req, res) => {
  const selectedUser = await User.findOne({ _id: req.body.id }).select("-__v").lean()
  const skillsToLearnArr = selectedUser.skillsToLearn.map((e) => e._id)
  const users = await User.aggregate([
    { $unwind: "$skillsToTeach" },
    { $match: { "skillsToTeach._id": { $in: skillsToLearnArr } } },
    {
      $group: {
        _id: "$_id",
        firstName: { $first: "$firstName" },
        lastName: { $first: "$lastName" },
        country: { $first: "$country" },
        skillsToTeach: { $push: { _id: "$skillsToTeach._id", name: "$skillsToTeach.name" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { count: 1 } },
  ])
  res.send(users)
}

const matchMentors = async (req, res) => {
  const pageOptions = {
    page: parseInt(req.query.page, 10) || 0,
    limit: parseInt(req.query.limit, 10) || 999,
  }
  const selectedUser = await User.findOne({ _id: req.params.userId }).select("-__v").lean()
  const skillsToLearnArr = selectedUser.skillsToLearn.map((e) => e._id)
  const users = await User.aggregate([
    { $unwind: "$skillsToTeach" },
    { $match: { "skillsToTeach._id": { $in: skillsToLearnArr } } },
    {
      $group: {
        _id: "$_id",
        firstName: { $first: "$firstName" },
        lastName: { $first: "$lastName" },
        country: { $first: "$country" },
        skillsToTeach: { $push: { _id: "$skillsToTeach._id", name: "$skillsToTeach.name" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { count: 1 } },
    { $skip: pageOptions.page * pageOptions.limit },
    { $limit: pageOptions.limit },
  ])
  res.send(users)
}

const uploadAvatar = (req, res, next) => {
  const _id = req.params.userId
  const url = `${req.protocol}://${req.get("host")}`
  User.findOne({ _id })
    .select("-__v")
    .then((user) => {
      user.avatar = `${url}/images/${req.file.filename}`
      return user
    })
    .then((user) => user.save())
    .then((user) => res.status(201).send(user))
    .catch((error) => res.status(400).json({ error }))
}

const addMentor = (req, res, next) => {
  const _id = req.params.userId
  User.findOne({ _id })
    .then((user) => {
      user.mentors.push(req.body)
      return user.mentors
    })
    .then((mentors) => res.status(201).json(mentors))
    .catch((err) => new Error(err))
}

// const postSkillsToTeach = (req, res) => {}

// const postSkillsToLearn = (req, res) => {}

module.exports = { getUsers, getUser, matchMentors, uploadAvatar, addMentor }

/*
  // const _id = req.params.userId
  // let skillsToLearnArr = []//va a contener los skills a matchear del usuario seleccionado.
  // const selectedUser = await User.findOne({_id}).select('-__v').lean()

  // const users = await User.find({}).select('-__v').lean()
  
  // selectedUser.skills.forEach(e => skillsToLearnArr.push(e._id.toString()))

  //itera sobre el array de users y pushea a un nuevo array resultado los usuarios que cumplan la condición de búsqueda
  // let user, skillToLearnId, userSkillId, aux = false, result = [];
  // for (let i = 0; i < users.length; i++) {
  //   user = users[i]

  //   for (let j = 0; j < user.skills.length; j++) {
  //     userSkillId = user.skills[j]._id.toString()

  //     for (let k = 0; k < skillsToLearnArr.length; k++) {
  //       skillToLearnId = skillsToLearnArr[k]

  //       let condition = userSkillId === skillToLearnId

  //       //conditions filters
  //       if (req.query.country) condition = condition && user.country === req.query.country
  //       if (req.query.type) condition = condition && user.type === req.query.type

  //       //construction of JSON
  //       if (condition) {
  //         result.push(users[i]);
  //         aux = true
  //         break;
  //       }
  //     }
  //     if (aux) {
  //       aux = false
  //       break;
  //     }
  //   }
  // }


*/
