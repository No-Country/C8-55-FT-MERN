const { Schema, model } = require("mongoose");

const savedSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    postId: { type: Schema.Types.ObjectId, ref: "Post" },
  },
  { timestamps: true }
);

const Saved = model("Saved", savedSchema);
module.exports = Saved;
