const { Schema, model } = require("mongoose");

module.exports = model(
  "Notification",
  new Schema({
    senderName: String,
    type: String,
    receiverId: { type: Schema.Types.ObjectId, ref: "User" },
    postId: { type: Schema.Types.ObjectId, ref: "Post" },
    read: Boolean,
    profileImage: String,

  },{
    timestamps: true
  })
);
