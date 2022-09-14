const router = require("express").Router();

const MoviesController = require("../controllers/movies.controllers");

//aqui se importa controllers

// router.get("/top_rated", MoviesController.getTopMovies);

// router.get("/popular", MoviesController.getPopularMovies);

router.get("/:_id/similar", MoviesController.getSimilarMovies);

router.get("/:_id/images", MoviesController.getImages);

router.get("/:_id/videos", MoviesController.getVideos);

router.get("/:_id", MoviesController.getSingleMedia);

module.exports = router;
