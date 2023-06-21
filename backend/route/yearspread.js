var express = require("express");
var router = express.Router();
const YearSpread = require("../model/YearSpread");
const { getYearSpreads, addYearSpread, editYearSpread, deleteYearSpread } = require('../controller/YearSpreadController');

// YearSpread
router.get("/", async (req, res, next) => {
  result = await getYearSpreads(req, res, next);
  res.send(result);
});

router.post("/add", async (req, res, next) => {
  result = await addYearSpread(req, res, next);
  res.send(result);
});

router.post("/edit", async (req, res, next) => {
  result = await editYearSpread(req, res, next);
  res.send(result);
});

router.get("/delete", async (req, res, next) => {
  result = await deleteYearSpread(req, res, next);
  res.send(result);
});

module.exports = router;