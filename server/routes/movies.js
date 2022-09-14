const router = require("express").Router();

const MoviesController = require("../controllers/movies.controllers");

//aqui se importa controllers

router.get("/top_rated", MoviesController.getTopMovies);

router.get("/popular", MoviesController.getPopularMovies);

router.get("/popular/:page", MoviesController.getPages);

router.get("/upcoming", MoviesController.getUpcoming);

module.exports = router;
