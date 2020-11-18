//const chalk = require("chalk")
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mentorme", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch(err=>console.log(err));
//const db = mongoose.connection
//db.on("error", console.error.bind(console, chalk.red("connection error:")));
//db.once("open", () => console.log(chalk.magenta("Database connected")));