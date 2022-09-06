const router = require("express").Router();

const users = require("./users");
const auth = require("./auth");
const movies = require("./movies");
const trending = require("./trending");

router.use("/users", users);
//router usuario
//hacer un ABM
//desactivar usuario
router.use("/auth", auth);
//router de auth
//loguear al usuario
//register/creacion del usuario
//desloguearse ----> me falta
router.use("/movies", movies);
router.use("/trending", trending);
//router de multimedia
//solo consumir info de la API
//no es ABM
//no modifica el usuario pero si maneja el contenido el usuario
module.exports = router;
