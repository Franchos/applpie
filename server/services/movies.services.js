const axios = require("axios");

class MoviesServices {
  static async getSingleMedia(_id) {
    const result = await axios.get(
      `${process.env.TMDB_BASE_URL}movie/${_id}?api_key=${process.env.TMDB_KEY}`
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

  static async getPopularMovies() {
    const popular1 = await axios.get(
      `${process.env.TMDB_BASE_URL}movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );
    const popular2 = await axios.get(
      `${process.env.TMDB_BASE_URL}movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=2`
    );
    const popular3 = await axios.get(
      `${process.env.TMDB_BASE_URL}movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=3`
    );
    const popular4 = await axios.get(
      `${process.env.TMDB_BASE_URL}movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=4`
    );

    const result = await Promise.all([
      ...popular1.data.results,
      ...popular2.data.results,
      ...popular3.data.results,
      ...popular4.data.results,
    ]);

    if (result) {
      return { data: result, error: false };
    } else if (result.status === 404) {
      return {
        data: "Popular movies are out right now, sorry. Try again.",
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

  static async getSimilarThings(string, _id) {
    const result = await axios.get(
      `${process.env.TMDB_BASE_URL}/movie/${_id}/${string}?api_key=${process.env.TMDB_KEY}`
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

  static async getPages(page) {
    const firstPage = await axios.get(
      `${process.env.TMDB_BASE_URL}movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}`
    );
    const secondPage = await axios.get(
      `${process.env.TMDB_BASE_URL}movie/popular?api_key=${
        process.env.TMDB_KEY
      }&language=en-US&page=${page + 1}`
    );
    const thirdPage = await axios.get(
      `${process.env.TMDB_BASE_URL}movie/popular?api_key=${
        process.env.TMDB_KEY
      }&language=en-US&page=${page + 2}`
    );

    const result = await Promise.all([
      ...firstPage.data.results,
      ...secondPage.data.results,
      ...thirdPage.data.results,
    ]);

    if (result) {
      return { data: result, error: false };
    } else if (result.status === 404) {
      return {
        data: "Basic movies are out right now, sorry. Try again.",
        error: true,
      };
    }
  }

  static async getUpcoming() {
    const result = await axios.get(
      `${process.env.TMDB_BASE_URL}/movie/upcoming?api_key=${process.env.TMDB_KEY}&page=1`
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
