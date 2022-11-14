const { Schema, model } = require("mongoose");

const Post = Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
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

module.exports = model("Post", Post);
