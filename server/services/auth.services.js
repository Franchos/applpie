const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthServices {
  static async login(email, password) {
    const user = await User.findOne({
      email: email,
    });
    if (user) {
      const validatePassword = bcrypt.compareSync(password, user.password);
      if (validatePassword) {
        const token = jwt.sign(
          {
            _id: user._id,
            name: user.name,
            password: user.password,
            email: user.email,
          },
          "banana",
          { expiresIn: "7d" }
        );
        return { data: { token, user }, error: false, status: 200 };
      }
      return { data: "Unauthorized", error: true, status: 401 };
    }
    return { data: "User not found", error: true, status: 404 };
  }
}

module.exports = AuthServices;
