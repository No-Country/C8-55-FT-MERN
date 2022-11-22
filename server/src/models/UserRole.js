const { Schema, model } = require("mongoose");

module.exports = model(
  "userRole",
  new Schema({
    userType: String,
    role: String,
  })
);
