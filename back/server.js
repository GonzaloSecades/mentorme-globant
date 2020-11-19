require("./config/index")
const express = require("express");
const volleyball = require("volleyball");
const routes = require("./routes");

const app = express();

app.use(volleyball);

//Routes
app.use("/api", routes);

app.listen(8000, ()=>console.log("SERVER LISTENING AT PORT 8000"))