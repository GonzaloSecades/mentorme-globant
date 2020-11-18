const express = require("express");
const router = express.Router();
const unaRutaRouter = require("./unaRuta");

router.get("/ping",(req,res)=>{
  res.send("pong")
})

//router.use("/categories", unaRutaRouter);

router.use("/", (req, res) => {
  res.send("No se ha alcanzado ninguna ruta");
});

module.exports = router;