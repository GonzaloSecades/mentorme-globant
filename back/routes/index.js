const express = require("express");
const router = express.Router();
const usersRouter = require("./users");

router.get("/ping",(req,res)=>{
  res.send("pong")
})


router.use("/users", usersRouter);

router.use("/", (req, res) => {
  res.send("No se ha alcanzado ninguna ruta");
});

module.exports = router;