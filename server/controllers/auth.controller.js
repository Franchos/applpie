const UserServices = require("../services/usuarios.services");
const AuthServices = require("../services/auth.services");
const userSchema = require("../utils/joi");
const jwt = require("jsonwebtoken");

class AuthController {
  static async login(req, res, next) {
    const { email, password } = req.body;

    const { data, error, status } = await AuthServices.login(email, password);

    if (error) {
      return res.status(status).json(data).end();
    }

    req.user = data.user;
    res.cookie("token", data.token);
    res.status(status).send(data.user);
  }

  static async signup(req, res) {
    try {
      const { name, password, email } = req.body;

      const { error: errorValidate } = userSchema.validate({
        name,
        email,
        password,
      });

      if (errorValidate) res.status(400).send(errorValidate).end();

      const { data, error } = await UserServices.postUser({
        name,
        password,
        email,
      });

      if (error) {
        res.status(400).json(data).end();
      }
      res.json(data);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  static async logout(req, res, next) {
    res.clearCookie("token");
    next();
  }
}

module.exports = AuthController;
