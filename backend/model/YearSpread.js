const { Schema, model } = require("mongoose");

const yearSpreadSchema = new Schema(
  {
    year_spread_id: Schema.Types.ObjectId,
    spread_id: Schema.Types.ObjectId,
    month: Number,
    day: Number,
    description: String,
    order: Number
  }, 
  { collection: "Year_Spread" }
);

const YearSpread = model("Year_Spread", yearSpreadSchema);

module.exports = YearSpread;