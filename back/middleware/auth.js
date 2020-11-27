const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
  try {
    console.log(req.body)
    const token = req.headers.authorization.split(" ")[1]
    const decodedToken = jwt.verify(token, "superfluous-cat&ultra-dog")
    const { userId } = decodedToken
    if (req.body.userId && req.body.userId !== userId) {
      throw new Error("Invalid user ID")
    } else {
      req.userId = userId
      next()
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!"),
    })
  }
}

const adminAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const decodedToken = jwt.verify(token, "superfluous-cat&ultra-dog")
    const { userId } = decodedToken
    if (req.body.userId && req.body.userId === userId) {
      if (req.body.isAdmin) next()
      else throw new Error("user does not have admin status, permission denied!")
    } else throw new Error("invalid userId!")
  } catch {
    res.status(401).json({ error: new Error("Invalid request!") })
  }
}

module.exports = { auth, adminAuth }
