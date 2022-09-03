const router = require("express").Router();

const UserController = require("../controllers/usuarios.controller");
const { verifyToken } = require("../middlewares/auth");

router.get("/", verifyToken, UserController.activeUsers);

router.put("/:_id", verifyToken, UserController.putUser);

router.delete("/:_id", verifyToken, UserController.deleteUser);

module.exports = router;
