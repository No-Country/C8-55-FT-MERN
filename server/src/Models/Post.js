const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    description: {
      type: String,
      require: [true, "description is required"],
    },
    image: { type: String },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    likes: [],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
