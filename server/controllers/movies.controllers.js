// aqui se importa services
const MoviesServices = require("../services/movies.services");

class MoviesController {
  //top movies
  static async getTopMovies(req, res) {
    try {
      const { data, error } = await MoviesServices.getTopMovies();

      error ? res.status(404).send(data) : res.json(data);
    } catch (error) {
      res.status(404).send(error);
    }
  }
  //1 movie
  static async getSingleMedia(req, res) {
    try {
      const { _id } = req.params;
      const { data, error } = await MoviesServices.getSingleMedia(_id);

      error ? res.status(404).send(data) : res.json(data);
    } catch (error) {
      res.status(404).send(error);
    }
  }
  //1 movie similar, maybe change it for a recommendation...
  static async getSimilarMovies(req, res) {
    // "similar",
    try {
      const { _id } = req.params;
      const { data, error } = await MoviesServices.getSimilarThings(
        "similar",
        _id
      );

      error ? res.status(404).send(data) : res.json(data);
    } catch (error) {
      res.status(404).send(error);
    }
  }

  static async getImages(req, res) {
    try {
      const { _id } = req.params;
      const { data, error } = await MoviesServices.getSimilarThings(
        "images",
        _id
      );
      error ? res.status(404).send(data) : res.json(data);
    } catch (error) {
      res.status(404).send(error);
    }
  }

  static async getVideos(req, res) {
    try {
      const { _id } = req.params;
      const { data, error } = await MoviesServices.getSimilarThings(
        "videos",
        _id
      );
      error ? res.status(404).send(data) : res.json(data);
    } catch (error) {
      res.status(404).send(error);
    }
  }

  static async getPopularMovies(req, res) {
    try {
      const { data, error } = await MoviesServices.getPopularMovies();
      error ? res.status(404).send(data) : res.json(data);
    } catch (error) {
      res.status(404).send(error);
    }
  }

  static async getPages(req, res) {
    try {
      const { page } = req.params;
      const { data, error } = await MoviesServices.getPages(page);
      error ? res.status(404).send(data) : res.json(data);
    } catch (error) {
      res.status(404).send(error);
    }
  }

  static async getUpcoming(req, res) {
    try {
      const { data, error } = await MoviesServices.getUpcoming();
      error ? res.status(404).send(data) : res.json(data);
    } catch (error) {
      res.status(404).send(error);
    }
  }
}
module.exports = MoviesController;
