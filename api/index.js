const mongoose = require("mongoose");
const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
dotenv.config();

const dbUrl = `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@cluster0.s6sn6bv.mongodb.net/Bullet_Journal?retryWrites=true&w=majority`;
mongoose.connect(dbUrl);

const User = require('../model/User');

const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/../"));
app.use("/user", require("../route/user"));

const httpServer = http.createServer(app);

httpServer.listen(80, function() {
  console.log("hello world");
})

module.exports = app;