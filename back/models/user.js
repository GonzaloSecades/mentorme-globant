const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  email: { type: String, email: true, required: true },
  accessLevel: { type: String, required: true },
  type: { type: String, required: true },
  skills: [{ type: Schema.Types.ObjectId, ref: "Skill"}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;