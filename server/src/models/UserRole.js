const { Schema, model } = require("mongoose");

module.exports = model(
  "UserRole",
  new Schema({
    userType: String,
    role: String,
  })
);
