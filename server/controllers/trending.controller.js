const TrendingServices = require("../services/trending.services");

class TrendingController {
  //Use trending day on search page. is going to show every trending movie at the moment.
  static async getTrendingDay(req, res) {
    try {
      const { error, data } = await TrendingServices.getTrendingDay();
      error ? res.status(404).json(data) : res.status(200).json(data);
    } catch (error) {
      res.status(404).json(data);
    }
  }
  //Use it for show on the main page.
  static async getTrendingWeek(req, res) {
    try {
      const { error, data } = await TrendingServices.getTrendingWeek();
      error ? res.status(400).json(data) : res.status(200).json(data);
    } catch (error) {
      res.status(404).send(error);
    }
  }
}

module.exports = TrendingController;
