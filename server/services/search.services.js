const axios = require("axios");

class SearchServices {
  static async getSearch(query) {
    const result = await axios.get(
      `${process.env.TMDB_BASE_URL}search/movie?api_key=${process.env.TMDB_KEY}&language=en-US&query=${query}`
    );
    // console.log(result);
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

module.exports = SearchServices;
