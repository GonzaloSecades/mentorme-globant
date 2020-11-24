const express = require("express");
const router = express.Router();
const {login, register} = require('../controllers/auth')

router.post('/register', register)
router.post('/login', login)
router.get("/me", (req, res) => {     
    if (!req.user) res.sendStatus(401);
    res.send(req.user);
  });

module.exports = router;