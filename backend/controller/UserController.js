const mongoose = require("mongoose");
const CryptoJS = require("crypto-js");
const User = require("../model/User");

async function getUser(req, res, next) {
  try {
    let email = req.body.email;
    let data = {
      email: email
    }

    let result = await User.findOne(data);
    
    if (result) {
      return result;
    }
    else {
      return { error: 'User does not exist' };
    }
  }
  catch (e) {
    next(e);
  }
}

async function checkUser(req, res, next) {
  try {
    let email = req.body.email;
    let password = CryptoJS.MD5(req.body.password).toString();
    let data = {
      email: email
    }

    let result = await User.findOne(data);

    if (result) {
      if (result.password == password) {
        return result;
      }
    }
    return new Error();
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
  checkUser,
  addUser,
  editUser,
  deleteUser
};