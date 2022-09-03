const router = require("express").Router();

const MoviesController = require("../controllers/movies.controllers");

//aqui se importa controllers

router.get("/:_id", MoviesController.getSingleMedia);

router.get("/", MoviesController.getTopMovies);

router.get("/:_id/similar", MoviesController.getSimilarMovies);

module.exports = router;
