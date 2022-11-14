const { Schema, model } = require("mongoose");

module.exports = model(
  "User",
  new Schema({
    name: String,
    lastName: String,
    mail: String,
    password: String,
    user_role: { type: Schema.Types.ObjectId, ref: "User_role" },
    profileImage: String,
    socials: [{ type: Schema.Types.ObjectId, ref: "User" }],
    description: String,
    assets: String,
    posts: [{ type: Schema.Types.ObjectId, ref: "User" }],
    saved: [{ type: Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: Schema.Types.ObjectId, ref: "User" }],
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  })
);
