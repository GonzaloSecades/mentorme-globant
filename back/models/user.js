const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  country: {type: String, required: true},
  // email: { type: String, email: true, required: true, unique: true },
  email: {
    type: String,
    validate: {
      validator: async function (email) {
        const user = await this.constructor.findOne({email});
        if (user) {
          if (this.id === user.id) return true;
          return false;
        }
        return true;
      },
      message: () => 'The specified email address is already in use.'
    },
    required: [true, 'User email required']
  },
  password: {type: String, required: true},
  accessLevel: {type: String, required: true},
  type: {type: String, required: true},
  skills: [{type: Schema.Types.ObjectId, ref: "Skill"}],
  skillsToLearn:[{type: Schema.Types.ObjectId, ref: "Skill"}],
  mentors: [{type: Schema.Types.ObjectId, ref: "User"}],
  mentees: [{type: Schema.Types.ObjectId, ref: "User"}],
});

const User = mongoose.model("User", userSchema);

module.exports = User;


//+No esta andando bien
// let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
// userSchema.path('email').validate(function (email) {
//   return emailRegex.test(email.text); // Assuming email has a text attribute
// }, 'El campo de email no puede estar vacio.')