const router = require("express").Router();

const TrendingController = require("../controllers/trending.controller");

router.get("/day", TrendingController.getTrendingDay);
router.get("/week", TrendingController.getTrendingWeek);

module.exports = router;
