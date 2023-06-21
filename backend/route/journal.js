var express = require("express");
var router = express.Router();
const Journal = require("../model/Journal");
const { getJournal, addJournal, deleteJournal } = require('../controller/JournalController');

// Journal
router.get("/", async (req, res, next) => {
  result = await getJournal(req, res, next);
  res.send(result);
});

router.post("/add", async (req, res, next) => {
  result = await addJournal(req, res, next);
  res.send(result);
});

router.get("/delete", async (req, res, next) => {
  result = await deleteJournal(req, res, next);
  res.send(result);
});

module.exports = router;