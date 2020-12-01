const mongoose = require("mongoose")

const { Schema } = mongoose

const objectiveSchema = new Schema({
  isCompleted: { type: Boolean },
  name: { type: String },
  menteeId: { type: String },
  mentorId: { type: String },
})

module.exports = mongoose.model("Objective", objectiveSchema)
