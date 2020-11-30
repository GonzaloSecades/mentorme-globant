const express = require("express")

const router = express.Router()
const {
  getUsers,
  getUser,
  matchMentors,
  uploadAvatar,
  addMentor,
  // postSkillsToLearn,
  // postSkillsToTeach,
} = require("../controllers/users")
const { auth } = require("../middleware/auth")
const multer = require("../middleware/multer-config")

// router.post("/:userId/postSkillsToTeach", patchSkillsToTeach)
// router.post("/:userId/postSkillsToLearn", patchSkillsToLearn)
router.patch("/:userId/addMentor", addMentor)
router.post("/:userId/uploadAvatar", multer, uploadAvatar)
router.get("/:userId/matchMentors", matchMentors)
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
