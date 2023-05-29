const mongoose = require("mongoose");
const Journal = require("../model/Journal");

async function getJournal(req, res, next) {
  try {
    let userId = req.query.userId;
    let data = {
      user_id: userId
    }
    return await Journal.findOne(data);
  }
  catch (e) {
    next(e);
  }
}

async function addJournal(req, res, next) {
  try {
    let userId = req.body.userId;
    let data = {
      user_id: userId
    };
    return await Journal.create(data);
  }
  catch (e) {
    next(e);
  }
}

async function deleteJournal(req, res, next) {
  try {
    let id = req.query.id;
    let data = {
      _id: id
    }
    return await Journal.deleteOne(data);
  }
  catch (e) {
    next(e);
  }
}

module.exports = {
  getJournal,
  addJournal,
  deleteJournal
};