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
    return await Comment.find({ userId: id })
      .lean()
      .populate({
        path: "replies",
        populate: { path: "replies" },
      })
      .lean()
      .populate({
        path: "userId",
        model: "User",
        select: { name: 1, lastName: 1, profileImage: 1 },
      });
  } else {
    console.log("error", err);
  }
};

const likeComment = async (comment, userId) => {
  await comment.updateOne({ $push: { likes: userId } });
};

const findCommentById = async (id) => {
  return await Comment.findById(id)
    .lean()
    .populate({
      path: "replies",
      populate: { path: "userId", select: { name: 1, lastName: 1 } },
    });
};

const dislikeComment = async (comment, userId) => {
  await comment.updateOne({ $pull: { likes: userId } });
};

const createReply = async (commentId, userId, postId, text, image) => {
  try {
    const comment = await Comment.findById(commentId);

    if (comment) {
      const newReply = new Comment({
        userId: userId,
        postId: postId,
        text: text,
        image: image,
      });

      const savedReply = await newReply.save();
      comment.replies = comment.replies.concat(savedReply._id);
      return await comment.save();
    }
  } catch (err) {
    console.log({ error: err });
  }
};

const deleteComment = async (id) => {
  const deletedPost = await Comment.findByIdAndDelete(id);
  const post = await Post.findById(deletedPost.postId);

  const deleteComment = post.comments.filter(
    (comment) => comment.toString() !== deletedPost._id.toString()
  );
  post.comments = deleteComment;
  await post.save();
  return deletedPost;
};

const updateComment = async (id, body) => {
  try {
    return Comment.findOneAndUpdate(
      id,
      {
        $set: body,
      },
      { new: true }
    );
  } catch (err) {
    console.log("error", err);
  }
};

module.exports = {
  createComment,
  getUserComments,
  findCommentById,
  createReply,
  likeComment,
  dislikeComment,
  deleteComment,
  updateComment,
};
