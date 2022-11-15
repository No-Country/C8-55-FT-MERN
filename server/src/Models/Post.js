const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    text: {
      type: String,
      require: [true, "text is required"],
    },
    image: { type: String },
    comments: [{type: Schema.Types.ObjectId, ref: "Comment" }],
    likes: [],
  },
  { timestamps: true }
);


const Post = model("Post", postSchema);
module.exports = Post;