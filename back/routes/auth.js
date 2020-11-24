const express = require("express");
const router = express.Router();
const {login, register, me} = require('../controllers/auth')

router.post('/register', register)
router.post('/login', login)
router.get("/me", me);

module.exports = router;