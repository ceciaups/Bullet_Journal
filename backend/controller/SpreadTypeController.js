const mongoose = require("mongoose");
const SpreadType = require("../model/SpreadType");

async function getSpreadType(req, res, next) {
  try {
    let id = req.query.id;
    let data = {
      _id: id
    }
    return await SpreadType.findOne(data);
  }
  catch (e) {
    next(e);
  }
}

async function addSpreadType(req, res, next) {
  try {
    let name = req.body.name;
    let icon = req.body.icon;
    let data = {
      spread_type_name: name,
      spread_type_icon: icon
    };
    return await SpreadType.create(data);
  }
  catch (e) {
    next(e);
  }
}

async function editSpreadType(req, res, next) {
  try {
    let id = req.body.id;
    let name = req.body.name;
    let icon = req.body.icon;
    let filter = {
      _id: id
    }
    let data = {
      spread_type_name: name,
      spread_type_icon: icon
    };
    return await SpreadType.updateOne(filter, data);
  }
  catch (e) {
    next(e);
  }
}

async function deleteSpreadType(req, res, next) {
  try {
    let id = req.query.id;
    let data = {
      _id: id
    }
    return await SpreadType.deleteOne(data);
  }
  catch (e) {
    next(e);
  }
}

module.exports = {
  getSpreadType,
  addSpreadType,
  editSpreadType,
  deleteSpreadType
};