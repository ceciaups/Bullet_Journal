var express = require("express");
var router = express.Router();
const User = require("../model/User");
const { getUser, addUser, editUser, deleteUser } = require('../controller/UserController');

// User
router.get("/", async (req, res, next) => {
  result = await getUser(req, res, next);
  res.send(result);
});

router.post("/add", async (req, res, next) => {
  await addUser(req, res, next);
  res.send("User added successfully!");
});

router.post("/edit", async (req, res, next) => {
  await editUser(req, res, next);
  res.send("User edited successfully!");
});

router.get("/delete", async (req, res, next) => {
  await deleteUser(req, res, next);
  res.send("User deleted successfully!");
});

module.exports = router;