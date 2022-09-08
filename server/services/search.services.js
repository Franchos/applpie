class SearchServices {
  static async getSearch(word) {
    const result = await axios.get(
      `${process.env.TMDB_BASE_URL}/search/movie/week?api_key=${process.env.TMDB_KEY}&query=${word}`
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

module.exports = SearchServices;
