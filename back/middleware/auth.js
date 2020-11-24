const jwt = require('jsonwebtoken');

auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'superfluous-cat&ultra-dog');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};

adminAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'superfluous-cat&ultra-dog');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId === userId) {
      if (req.body.isAdmin) next()
      else throw 'user does not have admin status, permission denied!';
    }
    else throw 'invalid userId!'
  } catch {
    res.status(401).json({error: new Error('Invalid request!')});
  }
};

module.exports = {auth, adminAuth}