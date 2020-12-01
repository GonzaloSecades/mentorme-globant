const express = require("express")

const router = express.Router()
const {
  getUsers,
  getUser,
  matchMentors,
  uploadAvatar,
  postMentor,
  postMentee,
  putSkillsToTeach,
  putSkillsToLearn,
  postObjective,
  patchObjectiveStatus,
} = require("../controllers/users")
const { auth } = require("../middleware/auth")
const multer = require("../middleware/multer-config")

// MENTEES
router.post("/:userId/mentees/add", postMentee)
router.post("/:userId/mentees/:menteeId/objectives/add", postObjective)

// router.get("/:userId/mentees/:menteeId/objectives", getMenteeObjectives)
// router.get("/:userId/mentees/:menteeId", getMenteeById)
// router.get("/:userId/mentees/", getMentees)

// MENTORS
router.get("/:userId/matchMentors", matchMentors)

router.patch("/:userId/mentors/:mentorId/objectives/:objectiveId/changeStatus", patchObjectiveStatus)

// router.put("/:userId/mentors/:mentorId/objectives/:objectiveId/edit", putObjective)

// router.get("/:userId/mentors/:mentorId/objectives", getUserMentorObjectives)
router.post("/:userId/mentors/add", postMentor)
// router.get("/:userId/mentors/:mentorId", getUserMentorById)
// router.get("/:userId/mentors", getUserMentors)

// USER
router.post("/:userId/uploadAvatar", multer, uploadAvatar)

router.put("/:userId/putSkillsToTeach", putSkillsToTeach)
router.put("/:userId/putSkillsToLearn", putSkillsToLearn)

router.get("/:userId", getUser)
router.get("/", getUsers)

module.exports = router

router.get("/test", (req, res) => {
  // ruta para testear cositas
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
