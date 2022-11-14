const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    postId: { type: Schema.Types.ObjectId, ref: "Post" },
    text: { type: String },
    image: { type: String },
    likes: [],
  },
  { timestamps: true }
);

const Comment = model("Comment", commentSchema);
module.exports = Comment;
