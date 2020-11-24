const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const usersRouter = require("./users");
const skillsRouter = require("./skills");

router.get("/ping",(req,res)=>res.send("pong"))

router.use("/auth", authRouter)
router.use("/users", usersRouter);
router.use("/skills", skillsRouter)

router.use("/*", (req, res) => {
  res.send("No route found");
});

module.exports = router;


