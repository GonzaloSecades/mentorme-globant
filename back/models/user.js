const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const {skillSchema} = require('./skill')

const userSchema = new Schema({
  email: {type: String, required: [true, 'User email required'], unique: true},
  password: {type: String, required: true, select: false},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  country: {type: String, required: true},
  phoneNumber: {type: String},
  languages: [{type: String, enum: ['spanish', 'portuguese', 'english', 'french', 'german', 'italian'], default: 'spanish'}],
  avatar: {type: String},

  skills: [{type: skillSchema, default:[]}],
  skillsToLearn: [{type: skillSchema, default:[]}],
  skillsToTeach: [{type: skillSchema, default:[]}],
  mentors: [{
    _id: {type: Schema.Types.ObjectId, ref: "User"},
    email: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    country: {type: String, required: true},
    phoneNumber: {type: String},
    languages: [{type: String, enum: ['spanish', 'portuguese', 'english', 'french', 'german', 'italian'], default: 'spanish'}],
    skills: [{_id: {type: Schema.Types.ObjectId, ref: "Skill"}, name: {type: String}}],
    avatar: {type: String}
  }],
  mentees: [{
    _id: {type: Schema.Types.ObjectId, ref: "User"},
    email: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    country: {type: String, required: true},
    phoneNumber: {type: String},
    languages: [{type: String, enum: ['spanish', 'portuguese', 'english', 'french', 'german', 'italian'], default: 'spanish'}],
    skills: [{_id: {type: Schema.Types.ObjectId, ref: "Skill"}, name: {type: String}}],
    avatar: {type: String}
  }],
  isAdmin: {type: Boolean, required: true},
});

// skillsToLearn: [{type: Schema.Types.ObjectId, ref: "Skill"}],
// skillsToTeach: [{type: Schema.Types.ObjectId, ref: "Skill"}],
// mentors: [{type: Schema.Types.ObjectId, ref: "User"}],
// mentees: [{type: Schema.Types.ObjectId, ref: "User"}],

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);

/* Otra forma de validar email
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
*/