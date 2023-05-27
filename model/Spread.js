const { Schema, model } = require("mongoose");

const spreadSchema = new Schema(
  {
    spread_type_id: Number,
    journal_id: Number,
    spread_name: String,
    order: Number
  }, 
  { collection: "Spread" }
);

const Spread = model("Spread", spreadSchema);

module.exports = Spread;