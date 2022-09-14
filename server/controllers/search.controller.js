const SearchServices = require("../services/search.services");

class SearchController {
  static async getSearch(req, res) {
    try {
      const { query } = req.params;
      const { data, error } = await SearchServices.getSearch(query);
      error ? res.status(404).send(data) : res.json(data);
    } catch (error) {
      res.status(404).send(error);
    }
  }
}

module.exports = SearchController;
