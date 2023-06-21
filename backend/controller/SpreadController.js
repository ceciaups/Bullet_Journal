const mongoose = require("mongoose");
const Spread = require("../model/Spread");

async function getSpread(req, res, next) {
  try {
    let id = req.query.id;
    let data = {
      _id: id
    }
    return await Spread.findOne(data);
  }
  catch (e) {
    next(e);
  }
}

async function getSpreadsByUser(req, res, next) {
  try {
    let id = req.query.id;
    let data = {
      journal_id: id
    }
    let result = await Spread.find(data).populate("spread_type_id").exec();
    console.log(result);
    return result;
  }
  catch (e) {
    next(e);
  }
}

async function addSpread(req, res, next) {
  try {
    let spreadTypeId = req.body.spreadTypeId;
    let journalId = req.body.journalId;
    let name = req.body.name;
    let order = req.body.order;
    let data = {
      spread_type_id: spreadTypeId,
      journal_id: journalId,
      spread_name: name,
      order: order
    };
    return await Spread.create(data);
  }
  catch (e) {
    next(e);
  }
}

async function editSpread(req, res, next) {
  try {
    let id = req.body.id;
    let spreadTypeId = req.body.spreadTypeId;
    let journalId = req.body.journalId;
    let name = req.body.name;
    let order = req.body.order;
    let filter = {
      _id: id
    }
    let data = {
      spread_type_id: spreadTypeId,
      journal_id: journalId,
      spread_name: name,
      order: order
    };
    return await Spread.updateOne(filter, data);
  }
  catch (e) {
    next(e);
  }
}

async function deleteSpread(req, res, next) {
  try {
    let id = req.query.id;
    let data = {
      _id: id
    }
    return await Spread.deleteOne(data);
  }
  catch (e) {
    next(e);
  }
}

module.exports = {
  getSpread,
  getSpreadsByUser,
  addSpread,
  editSpread,
  deleteSpread
};