const { Schema, model } = require("mongoose");

const journalSchema = new Schema(
  {
    user_id: Number
  }, 
  { collection: "Journal" }
);

const Journal = model("Journal", journalSchema);

module.exports = Journal;