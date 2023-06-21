var express = require("express");
var router = express.Router();
const Spread = require("../model/Spread");
const { getSpread, getSpreadsByUser, addSpread, editSpread, deleteSpread } = require('../controller/SpreadController');

// Spread
router.get("/", async (req, res, next) => {
  result = await getSpread(req, res, next);
  res.send(result);
});

router.get("/all", async (req, res, next) => {
  result = await getSpreadsByUser(req, res, next);
  res.send(result);
});

router.post("/add", async (req, res, next) => {
  result = await addSpread(req, res, next);
  res.send(result);
});

router.post("/edit", async (req, res, next) => {
  result = await editSpread(req, res, next);
  res.send(result);
});

router.get("/delete", async (req, res, next) => {
  result = await deleteSpread(req, res, next);
  res.send(result);
});

module.exports = router;