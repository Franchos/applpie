const jwt = require("jsonwebtoken");
const { validateToken } = require("../config/token");

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
  if (!req.cookies.token) return res.sendStatus(401);
  const token = req.cookies.token;
  const { payload } = validateToken(token);
  if (payload) {
    req.user = payload;
    return next();
  }
};

module.exports = { verifyToken, validateAuth };
