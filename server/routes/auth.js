const router = require("express").Router();

const Usuario = require("../models/User");
const AuthController = require("../controllers/auth.controller");
const { validateAuth } = require("../middlewares/auth");

router.post("/login", AuthController.login);

router.post("/signup", AuthController.signup);

router.post("/logout", AuthController.logout);

router.get("/me", validateAuth, async (req, res) => {
  const user = await Usuario.findById(req.user._id);
  return res.send(user);
});

module.exports = router;
