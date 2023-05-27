const mongoose = require("mongoose");
const CryptoJS = require("crypto-js");
const User = require("../model/User");

async function getUser(req, res, next) {
  try {
    let id = req.query.id;
    let data = {
      _id: id
    }
    return await User.findOne(data);
  }
  catch (e) {
    next(e);
  }
}

async function addUser(req, res, next) {
  try {
    let email = req.body.email;
    let password = CryptoJS.MD5(req.body.password).toString();
    let data = {
      email: email,
      password: password
    };
    return await User.create(data);
  }
  catch (e) {
    next(e);
  }
}

async function editUser(req, res, next) {
  try {
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
    return await User.updateOne(filter, data);
  }
  catch (e) {
    next(e);
  }
}

async function deleteUser(req, res, next) {
  try {
    let id = req.query.id;
    let data = {
      _id: id
    }
    return await User.deleteOne(data);
  }
  catch (e) {
    next(e);
  }
}

module.exports = {
  getUser,
  addUser,
  editUser,
  deleteUser
};