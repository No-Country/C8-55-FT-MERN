const { Schema, model } = require("mongoose");

module.exports = model(
  "User",
  new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    mail: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userRole: { type: Schema.Types.ObjectId, ref: "User_role" },
    profileImage: String,
    socials: [{ type: Schema.Types.ObjectId, ref: "User" }],
    description: String,
    assets: String,
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    saved: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    following: [{ type: Schema.Types.ObjectId, ref: "User" }],
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    saved: { type: Schema.Types.ObjectId, ref: "Saved" },
  })
);
