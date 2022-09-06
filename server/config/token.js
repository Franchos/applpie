const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  const token = jwt.sign({ payload }, process.env.TMDB_KEY, {
    expiresIn: "7d",
  });
  return token;
};

const validateToken = (token) => {
  return jwt.verify(token, process.env.TMDB_KEY);
};

module.exports = { generateToken, validateToken };
