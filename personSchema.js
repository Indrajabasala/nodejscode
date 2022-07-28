var mongoose = require("mongoose");

const PERSON_SCHEMA = new mongoose.Schema({
  fname: { type: String },
  lname: { type: String },
  mobilenumber: { type: String },
  add: { type: String },
});

module.exports = mongoose.model("person", PERSON_SCHEMA);

console.log("created successful");
