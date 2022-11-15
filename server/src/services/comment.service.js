const Comment = require("../models/Comment");
const Post = require("../models/Post");

const createComment = async (userId, postId, text, image) => {
  const post = await Post.findById(postId);

  const newComment = new Comment({
    userId: userId,
    postId: post._id,
    text: text,
    image: image,
  });

  const savedComment = await newComment.save();
  post.comments = post.comments.concat(savedComment._id);
  return await post.save();
};

const getUserComments = async (id) => {
  return await Comment.find({ filter: id });
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
