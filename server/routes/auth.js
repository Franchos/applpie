const router = require("express").Router();

const AuthController = require("../controllers/auth.controller");
const { validateAuth } = require("../middlewares/auth");

router.post("/login", AuthController.login);

router.post("/signup", AuthController.signup);

router.get("/me", validateAuth, (req, res) => res.send(req.user));

module.exports = router;
