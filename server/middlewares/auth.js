const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  const { error, decoded } = jwt.verify(token, "banana");

  if (error) res.status(401).json(error);
  else {
    req.usuario = decoded.usuario;
    next();
  }
};

const validateAuth = (req, res, next) => {
  const token = req.cookie.token;
  if (!token) return res.sendStatus(401);

  const user = jwt.verify(token, process.env.SECRET);
  console.log(user);
  if (!user) return res.sendStatus(401);

  req.user = user;

  next();
};

module.exports = { verifyToken, validateAuth };
