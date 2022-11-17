const commentService = require("../services/comment.service");

const createComment = async (req, res) => {
  try {
    const { userId, postId, text, image } = req.body;
    const comment = await commentService.createComment(
      userId,
      postId,
      text,
      image
    );
    return res.status(200).json({ created: "successfully", comment: comment });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getUserComments = async (req, res) => {
  try {
    let { id } = req.params;
    const comments = await commentService.getUserComments(id);
    return res.status(200).json({ comments: comments });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const createReply = async (req, res) => {
  try {
    let { commentId, userId, postId, text, image } = req.body;
    const reply = await commentService.createReply(
      commentId,
      userId,
      postId,
      text,
      image
    );
    return res.status(200).json({ created: "successfully", reply });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const likeComment = async (req, res) => {
  try {
    let { id } = req.params;
    let { userId } = req.body;
    const comment = await commentService.findComment(id);
    if (!comment.likes.includes(userId)) {
      await commentService.likeComment(comment, userId);
      return res.status(200).json({ liked: "successfully" });
    } else {
      await commentService.dislikeComment(comment, userId);
      return res.status(200).json({ disliked: "successfully" });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const findCommentById = async (req, res) => {
  try {
    let { id } = req.params;
    const comment = await commentService.findCommentById(id);
    return res.status(200).json({ comment: comment });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { createComment, getUserComments, createReply, likeComment, findCommentById };
