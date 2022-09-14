// importa el modelo
// se exporta en controllers
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { generateToken } = require("../config/token");
const { default: axios } = require("axios");

class UserServices {
  static async postUser(body) {
    const validacion = await User.findOne({ email: body.email });

    if (validacion)
      return { data: "This email is already in use.", error: true };

    const user = new User({
      email: body.email,
      name: body.name,
      password: bcrypt.hashSync(body.password, 10),
    });

    const result = await user.save();
    const token = generateToken(result);

    return { data: { result, token }, error: false };
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

  static async setFav(user_id, movie) {
    const user = await User.findByIdAndUpdate(
      { _id: user_id },
      {
        $addToSet: { favorites: movie },
      },
      { new: true }
    );

    if (!user) return { data: "This user doesn't exist", error: true };

    return { data: user, error: false };
  }

  static async removeFav(user_id, movie_id) {
    const user = await User.findByIdAndUpdate(
      { _id: user_id },
      {
        $pull: { favorites: { id: movie_id } },
      },
      { new: true }
    );

    if (!user) return { data: "This user doesn't exist", error: true };

    return { data: user, error: false };
  }
}

module.exports = UserServices;
