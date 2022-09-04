// importa el modelo
// se exporta en controllers
const User = require("../models/User");
const bcrypt = require("bcrypt");

class UserServices {
  static async postUser(body) {
    const validacion = await User.findOne({ email: body.email });
    if (validacion) {
      return { data: "This email is already in use.", error: true };
    }
    if (!validacion) {
      const usuario = new User({
        email: body.email,
        name: body.name,
        password: bcrypt.hashSync(body.password, 10),
      });
      const result = await usuario.save();
      return { data: result, error: false };
    }
  }

  static async activeUsers() {
    const user = await User.find({ state: true }).select({
      _id: 0,
      password: 0,
    });
    if (user.length === 0 || !user) {
      return {
        data: "Can't find any user",
        error: true,
      };
    } else if (user) {
      return { data: user, error: false };
    }
  }

  static async putUser(_id, { name, password }) {
    const user = await User.findByIdAndUpdate(
      { _id: _id },
      {
        $set: {
          name: name,
          password: password,
        },
      },
      { new: true }
    );
    if (!user) {
      return { data: "This user isn't available", error: true };
    }
    return { data: user, error: false };
  }

  static async deleteUser(_id) {
    const validacion = await User.findById(_id);
    if (!validacion.state) {
      return {
        data: "This user is already deleted either can't be deleted",
        error: true,
      };
    } else {
      const user = await User.findByIdAndUpdate(
        { _id: _id },
        {
          $set: {
            state: false,
          },
        },
        { new: true }
      );

      return { data: { name: user.name, email: user.email }, error: false };
    }
  }
}

module.exports = UserServices;
