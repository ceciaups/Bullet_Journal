const { Schema, model } = require("mongoose");

const spreadTypeSchema = new Schema(
  {
    spread_type_name: String,
    spread_type_icon: String
  }, 
  { collection: "Spread_Type" }
);

const SpreadType = model("Spread_Type", spreadTypeSchema);

module.exports = SpreadType;