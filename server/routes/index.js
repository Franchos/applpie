const router = require("express").Router();

const users = require("./users");
const auth = require("./auth");
const movies = require("./movies");
const trending = require("./trending");

router.use("/users", users);
//router usuario
//hacer un ABM
//crear un usuario
//desactivar usuario
router.use("/auth", auth);
router.use("/movies", movies);
router.use("/trending", trending);
//router de multimedia
//solo consumir info de la API
//no es ABM
//no modifica el usuario pero si maneja el contenido el usuario
module.exports = router;
