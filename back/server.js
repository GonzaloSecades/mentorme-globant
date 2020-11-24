require("./config/index");
const express = require("express");
const path = require('path')
const volleyball = require("volleyball");
const routes = require("./routes");
const bodyParser = require("body-parser");

const app = express();

app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/images', express.static(path.join(__dirname, 'images')));
//Routes
app.use("/api", routes);

<<<<<<< HEAD
app.listen(8000, () => console.log("SERVER LISTENING AT PORT 8000"));
=======

app.listen(8000, ()=>console.log("SERVER LISTENING AT PORT 8000"))
>>>>>>> 855cb5af6c76bb7ca84f0b9d554003cb5a91b7e4
