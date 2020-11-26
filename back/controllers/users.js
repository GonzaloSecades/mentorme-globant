const User = require("../models/user")
const _ = require("lodash")

getUsers = (req, res) => {
  if (!_.isEmpty(req.query)) {
    const pageOptions = {
      page: parseInt(req.query.page, 10) || 0,
      limit: parseInt(req.query.limit, 10) || 10
  }
    User.find().skip(pageOptions.page * pageOptions.limit).limit(pageOptions.limit)
    .then((data)=>res.status(200).send(data))
    .catch(err=>res.status(500).send(err))
  }
  else {
    User.find({}).lean()
    .then(data => res.status(200).send(data))
    .catch(err => console.log(err))
  }
}

getUser = (req, res) => {
  User.findOne({_id:req.params.userId}).select('-_id -__v')
    .then(data => res.status(200).send(data))
    .catch(err => console.log(err))
}

matchUserSkills = async (req, res) => {
//   const selectedUser = await User.findOne({_id}).select('-__v').populate('skills', '-__v').lean()
//   const users = await User.aggregate(
//     {$unwind: '$skillsToTeach'},
//     {$match: {"$skillsToTeach._id": {$in: selectedUser.skillToLearn.map(e=>e._id)}}}, 
//     {$group: {
//         _id:{"_id":1}, 
//         count:{$sum:1}
//     }}, 
//     {$sort:{count:-1}}
// );


  const _id = req.params.userId
  let skillsToLearnArr = []//va a contener los skills a matchear del usuario seleccionado.
  const selectedUser = await User.findOne({_id}).select('-__v').populate('skills', '-__v').lean()

  const users = await User.find({}).select('-__v').populate('skills', '-__v').lean()
  selectedUser.skills.forEach(e => skillsToLearnArr.push(e._id.toString()))

  //itera sobre el array de users y pushea a un nuevo array resultado los usuarios que cumplan la condición de búsqueda
  let user, skillToLearnId, userSkillId, aux = false, result = [];
  for (let i = 0; i < users.length; i++) {
    user = users[i]

    for (let j = 0; j < user.skills.length; j++) {
      userSkillId = user.skills[j]._id.toString()

      for (let k = 0; k < skillsToLearnArr.length; k++) {
        skillToLearnId = skillsToLearnArr[k]

        let condition = userSkillId === skillToLearnId

        //conditions filters
        if (req.query.country) condition = condition && user.country === req.query.country
        if (req.query.type) condition = condition && user.type === req.query.type

        //construction of JSON
        if (condition) {
          result.push(users[i]);
          aux = true
          break;
        }
      }
      if (aux) {
        aux = false
        break;
      }
    }
  }
  res.status(200).send(result)
}


uploadAvatar = (req, res, next) => {
  const _id = req.body.userId, url = req.protocol + '://' + req.get('host');
  User.findOne({_id}).select('-__v')
    .then(user => {
      user.avatar = url + '/images/' + req.file.filename
      return user
    })
    .then(user=>user.save())
    .then(user => res.status(201).send(user))
    .catch(error => res.status(400).json({error: error}))
};

module.exports = {getUsers, getUser, matchUserSkills, uploadAvatar}