const router = require("express").Router();
const SearchController = require("../controllers/search.controller");

router.get("/movie/:query", SearchController.getSearch);

module.exports = router;
