const axios = require("axios");

class TrendingServices {
  static async getTrendingDay() {
    const result = await axios.get(
      `${process.env.TMDB_BASE_URL}/trending/movie/day?api_key=${process.env.TMDB_KEY}`
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

  static async getTrendingWeek() {
    const result = await axios.get(
      `${process.env.TMDB_BASE_URL}/trending/movie/week?api_key=${process.env.TMDB_KEY}`
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

module.exports = TrendingServices;
