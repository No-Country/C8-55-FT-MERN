const Comment = require("../models/Comment");
const Post = require("../models/Post");

const createComment = async (userId, postId, text, image) => {
  try {
    const post = await Post.findById(postId);
    if (post) {
      const newComment = new Comment({
        userId: userId,
        postId: post._id,
        text: text,
        image: image,
      });

      const savedComment = await newComment.save();
      post.comments = post.comments.concat(savedComment._id);
      return await post.save();
    }
  } catch (err) {
    console.log(err);
  }
};

const getUserComments = async (id) => {
  if (id) {
    return await Comment.find({ filter: id });
  } else {
    console.log("error", err);
  }
};

const createReply = async (id, body) => {
  return await Comment.findByIdAndUpdate(
    id,
    {
      $set: { body },
    },
    { new: true }
  );
};

module.exports = { createComment, getUserComments, createReply };
