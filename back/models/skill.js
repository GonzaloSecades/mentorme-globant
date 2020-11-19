const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var skillSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  proficiency: { type: String},
  //users: [{ type: Schema.Types.ObjectId, ref: "User"}]
});

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;