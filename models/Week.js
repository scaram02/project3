const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weekSchema = new Schema({
  id: String,
  year: Number,
  week: Number, 
  weekRange: String
});

const Week = mongoose.model("Week", weekSchema);

module.exports = Week;