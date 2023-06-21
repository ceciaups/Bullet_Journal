const { Schema, model } = require("mongoose");

const spreadSchema = new Schema(
  {
    spread_type_id: {type: Schema.Types.ObjectId, ref: 'Spread_Type'},
    journal_id: Schema.Types.ObjectId,
    spread_name: String,
    order: Number
  }, 
  { collection: "Spread" }
);

const Spread = model("Spread", spreadSchema);

module.exports = Spread;