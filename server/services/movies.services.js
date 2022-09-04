const axios = require("axios");

class MoviesServices {
  static async getSingleMedia(_id) {
    const result = await axios.get(
      `${process.env.TMDB_BASE_URL}movie/${_id}?api_key=${process.env.TMDB_KEY}&language=en-US`
    );
    if (result && result.status === 200) {
      return { data: result.data, error: false };
    } else if (result.status === 404) {
      return {
        data: "Couldn't find any movie, sorry. Try again.",
        error: true,
      };
    }
  }

  static async getTopMovies() {
    const result = await axios.get(
      `${process.env.TMDB_BASE_URL}movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );
    if (result) {
      return { data: result.data, error: false };
    } else if (result.status === 404) {
      return {
        data: "Basic movies are out right now, sorry. Try again.",
        error: true,
      };
    }
  }

  static async getSimilarMovies(_id) {
    const result = await axios.get(
      `${process.env.TMDB_BASE_URL}/movie/${_id}/similar?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );
    if (result) {
      return { data: result.data, error: false };
    } else {
      return {
        data: "This source isn't available right now, sorry. Try again.",
        error: true,
      };
    }
  }
}

module.exports = MoviesServices;
