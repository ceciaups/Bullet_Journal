const mongoose = require("mongoose");
const YearSpread = require("../model/YearSpread");

async function getYearSpreads(req, res, next) {
  try {
    let id = req.query.id;
    let data = {
      spread_id: id
    }
    return await YearSpread.find(data).sort({"month": 1, "day": 1});
  }
  catch (e) {
    next(e);
  }
}

async function addYearSpread(req, res, next) {
  try {
    let spreadId = req.body.spreadId;
    let month = req.body.month;
    let day = req.body.day;
    let description = req.body.description;
    let order = req.body.order;
    let data = {
      spread_id: spreadId,
      month: month,
      day: day,
      description: description,
      order: order
    };
    return await YearSpread.create(data);
  }
  catch (e) {
    next(e);
  }
}

async function editYearSpread(req, res, next) {
  try {
    let id = req.body.id;
    let spreadId = req.body.spreadId;
    let month = req.body.month;
    let day = req.body.day;
    let description = req.body.description;
    let order = req.body.order;
    let filter = {
      _id: id
    }
    let data = {
      spread_id: spreadId,
      month: month,
      day: day,
      description: description,
      order: order
    };
    return await YearSpread.updateOne(filter, data);
  }
  catch (e) {
    next(e);
  }
}

async function deleteYearSpread(req, res, next) {
  try {
    let id = req.query.id;
    let data = {
      _id: id
    }
    return await YearSpread.deleteOne(data);
  }
  catch (e) {
    next(e);
  }
}

module.exports = {
  getYearSpreads,
  addYearSpread,
  editYearSpread,
  deleteYearSpread
};