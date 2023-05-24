const mongoose = require("mongoose");
const express = require("express");
const http = require("http");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
dotenv.config();

const dbUrl = `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@cluster0.s6sn6bv.mongodb.net/Bullet_Journal?retryWrites=true&w=majority`;
mongoose.connect(dbUrl);

const User = require('../model/User');

const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/../"));

// User
app.get("/users", async (req, res) => {
  result = await getUsers();
  res.send(result);
});
app.post("/user/add", async (req, res) => {
  let email = req.body.email;
  let password = CryptoJS.MD5(req.body.password).toString();
  let data = {
    email: email,
    password: password
  };
  await addUser(data);
  res.send("User added successfully!");
});
app.get("/user/delete", async (req, res) => {
  console.log(req.query)
  let id = req.query.id;
  let data = {
    _id: id
  }
  await deleteUser(data);
  res.send("User deleted successfully!");
});
app.post("/user/edit", async (req, res) => {
  let id = req.body.id;
  let email = req.body.email;
  let password = CryptoJS.MD5(req.body.password).toString();
  let filter = {
    _id: id
  }
  let data = {
    email: email,
    password: password
  };
  await editUser(filter, data);
  res.send("User edited successfully!");
});

async function getUsers() {
  return await User.find({});
}
async function addUser(data) {
  return await User.create(data);
}
async function deleteUser(data) {
  return await User.deleteOne(data);
}
async function editUser(filter, data) {
  return await User.updateOne(filter, data);
}

const httpServer = http.createServer(app);

httpServer.listen(8888, function() {
  console.log("hello world");
})

module.exports = app;