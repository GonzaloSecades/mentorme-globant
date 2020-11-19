const express = require("express");
const router = express.Router();
const usersRouter = require("./users");
const skillsRouter = require("./skills");

router.get("/ping",(req,res)=>{
  res.send("pong")
})

router.use("/users", usersRouter);
router.use("/skills", skillsRouter)

router.use("/", (req, res) => {
  res.send("No se ha alcanzado ninguna ruta");
});

module.exports = router;


