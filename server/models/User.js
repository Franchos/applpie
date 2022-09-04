const mongoose = require("mongoose");

const Usuario = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  state: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String,
    required: false,
  },
  favorites: {
    type: Array,
    default: [],
  },
});

// hacer una lista de favoritos.

module.exports = mongoose.model("usuario", Usuario);
