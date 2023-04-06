const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {type: String, unique: true},
  password: {type: String},
  username: {type: String},
  block: {type: Boolean},
  isAdmin: {type: Boolean},
  token: {type: String},
});

module.exports = mongoose.model("user", userSchema);