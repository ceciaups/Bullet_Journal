var express = require("express");
var router = express.Router();
const Spread = require("../model/Spread");
const { getSpread, addSpread, editSpread, deleteSpread } = require('../controller/SpreadController');

// Spread
router.get("/", async (req, res, next) => {
  result = await getSpread(req, res, next);
  res.send(result);
});

router.post("/add", async (req, res, next) => {
  await addSpread(req, res, next);
  res.send("Spread added successfully!");
});

router.post("/edit", async (req, res, next) => {
  await editSpread(req, res, next);
  res.send("Spread edited successfully!");
});

router.get("/delete", async (req, res, next) => {
  await deleteSpread(req, res, next);
  res.send("Spread deleted successfully!");
});

module.exports = router;