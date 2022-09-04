const UserServices = require("../services/usuarios.services");
const AuthServices = require("../services/auth.services");
const userSchema = require("../utils/joi");
const jwt = require("jsonwebtoken");

class AuthController {
  static async login(req, res, next) {
    const { email, password } = req.body;

    const { data, error, status } = await AuthServices.login(email, password);

    // !user
    //   ? res.status(400).json({ msj: "Wrong email or password" })
    //   : res.send(user);

    if (error) {
      return res.status(status).json(data);
    }

    // const payload = jwt.verify(data.token, "banana")
    req.user = data.user;
    res.cookie("token", data.token);
    res.status(status).send(data.user);
    // res.status(status).send(data);
  }

  static async signup(req, res) {
    try {
      const { name, password, email } = req.body;

      const { error: errorValidate } = userSchema.validate({
        name,
        password,
        email,
      });

      if (errorValidate) res.status(400).send(errorValidate).end();

      const { data, error } = await UserServices.postUser({
        name,
        password,
        email,
      });

      error ? res.status(400).json(data) : res.json(data);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

module.exports = AuthController;
