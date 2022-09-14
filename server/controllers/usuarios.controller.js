// Controllers importa Services
const UserServices = require("../services/usuarios.services");
const userSchema = require("../utils/joi");

class UserController {
  static async activeUsers(req, res) {
    try {
      const { data, error } = await UserServices.activeUsers();
      if (error) {
        return res.status(400).json(data);
      }
      return res.json(data);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  static async putUser(req, res, next) {
    try {
      const { name, password } = req.body;
      const { _id } = req.params;

      const { error: errorValidate, value } = userSchema.validate({
        name,
        password,
      });

      if (errorValidate) {
        res.status(400).send({ error }).end();
      }

      const { data, error } = await UserServices.putUser(_id, {
        name,
        password,
      });

      if (error) {
        return res.json(data);
      }

      return res.json({ name: data.name, email: data.email });
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  static async deleteUser(req, res) {
    try {
      const { _id } = req.params;

      const { data, error } = await UserServices.deleteUser(_id);

      if (error) {
        return res.status(400).json(data);
      }
      return res.json(data);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  static async setFav(req, res) {
    try {
      const { user_id } = req.body;
      const { movie } = req.body;

      const { data, error } = await UserServices.setFav(user_id, movie);

      !error ? res.status(200).send(data) : res.status(400).send(data);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  // static async getFavs(req, res) {
  //   try {
  //     const { user_id } = req.params;

  //     const { data, error } = await UserServices.getFavs(user_id);

  //     !error ? res.status(200).send(data) : res.status(400).send(data);
  //   } catch {}
  // }

  static async removeFav(req, res) {
    try {
      const { movie_id } = req.body;
      const { user_id } = req.params;

      // console.log(req.body);

      const { data, error } = await UserServices.removeFav(user_id, movie_id);

      !error ? res.status(200).send(data) : res.status(400).send(data);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}
module.exports = UserController;
