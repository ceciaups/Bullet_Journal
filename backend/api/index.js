const mongoose = require("mongoose");
const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
dotenv.config();

const dbUrl = `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@cluster0.s6sn6bv.mongodb.net/Bullet_Journal?retryWrites=true&w=majority`;
mongoose.connect(dbUrl);

const User = require('../model/User');
const Journal = require('../model/Journal');
const Spread = require('../model/Spread');
const SpreadType = require('../model/SpreadType');

const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/../"));

app.use("/user", require("../route/user"));
app.use("/journal", require("../route/journal"));
app.use("/spread", require("../route/spread"));
app.use("/spreadtype", require("../route/spreadtype"));

const httpServer = http.createServer(app);

httpServer.listen(80, function() {
  console.log("hello world");
})

module.exports = app;