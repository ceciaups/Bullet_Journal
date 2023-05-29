var express = require("express");
var router = express.Router();
const SpreadType = require("../model/SpreadType");
const { getSpreadType, addSpreadType, editSpreadType, deleteSpreadType } = require('../controller/SpreadTypeController');

// SpreadType
router.get("/", async (req, res, next) => {
  result = await getSpreadType(req, res, next);
  res.send(result);
});

router.post("/add", async (req, res, next) => {
  await addSpreadType(req, res, next);
  res.send("Spread Type added successfully!");
});

router.post("/edit", async (req, res, next) => {
  await editSpreadType(req, res, next);
  res.send("Spread Type edited successfully!");
});

router.get("/delete", async (req, res, next) => {
  await deleteSpreadType(req, res, next);
  res.send("Spread Type deleted successfully!");
});

module.exports = router;