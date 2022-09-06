const router = require("express").Router();

const UserController = require("../controllers/usuarios.controller");
const { validateAuth } = require("../middlewares/auth");

router.get("/", validateAuth, UserController.activeUsers);

router.put("/:_id", validateAuth, UserController.putUser);

router.delete("/:_id", validateAuth, UserController.deleteUser);

module.exports = router;
