const SearchServices = require("../services/search.services");

class SearchController {
  static async getSearch(req, res) {
    try {
      const { word } = req.body;
      const { data, error } = await SearchServices.getSearch(word);
      error ? res.status(404).send(data) : res.json(data);
    } catch (error) {
      res.status(404).send(error);
    }
  }
}

module.exports = SearchController;
