
const express = require("express");
const router = express.Router();
const {getAllUsers, getUser, matchUserSkills, uploadAvatar} = require('../controllers/users')
const {auth} = require('../middleware/auth')
const multer = require('../middleware/multer-config')

const User = require("../models/user")

router.get('/test', auth ,async (req, res) => {
  console.log("PASO EL AUTH")
  const selectedUser = await User.findOne({_id: req.body.id}).select('-__v').lean()
  const skillsToLearnArr = selectedUser.skillsToLearn.map(e => e._id)
  const users = await User.aggregate([
    {$unwind: '$skillsToTeach'},
    {$match: {'skillsToTeach._id': {$in: skillsToLearnArr}}},
    {$group: {
        _id: "$_id",
        firstName: {$first: '$firstName'},
        lastName: {$first: '$lastName'},
        country: {$first: '$country'},
        skillsToTeach: {$push:{_id:'$skillsToTeach._id', name:'$skillsToTeach.name'}},
        matchedSkillsCount: {$sum: 1},
      }
    },
    {$sort: {count: 1}}
  ])
  res.send(users)


})

router.post('/:userId/avatar', multer, uploadAvatar)
router.get('/:userId/match', matchUserSkills)
router.get('/:userId', getUser)
router.get('/', getAllUsers)


module.exports = router;


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