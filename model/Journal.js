const { Schema, model } = require("mongoose");

const journalSchema = new Schema(
  {
    user_id: Schema.Types.ObjectId
  }, 
  { collection: "Journal" }
);

const Journal = model("Journal", journalSchema);

module.exports = Journal;