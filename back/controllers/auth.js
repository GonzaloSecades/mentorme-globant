const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const User = require("../models/user")

register = (req, res) => {
  bcrypt.hash(req.body.password, 10).then(
    (hash) => {
      const user = new User({...req.body, password: hash});
      user.save()
        .then(() => res.status(201).json({message: 'User added successfully!'}))
        .catch((error) => res.status(500).json({error: error}));
    }
  )
}

login = (req, res) => {
  User.findOne({email: req.body.email}).select('+password')
    .then(user => {
      if (!user) {
        return res.status(401).json({error: new Error('User not found!')});
      }
      bcrypt.compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) return res.status(401).json({error: new Error('Incorrect password!')})
          const token = jwt.sign({userId: user._id}, 'superfluous-cat&ultra-dog', {expiresIn: '24h'})
          res.status(200).json({user, token})
        }).catch(error => res.status(500).json({error: error}))
    }).catch(error => res.status(500).json({error: error}))
}

me = (req, res) => {
  User.findOne({_id: req.userId})
    .then(user => {
      console.log("user a enviar", user)
      if (!user) {
        return res.status(401).json({error: new Error('User not found!')});
      }
      else res.status(200).send(user);
    })
}

module.exports = {register, login, me}