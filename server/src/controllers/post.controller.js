const postService = require("../services/post.service");
const { cache, deleteCache } = require("../utils/cache");

const createPost = async (req, res) => {
  try {
    const { userId, text, image } = req.body;
    if (!userId)
      return res.status(404).json({ message: "User id is required" });
    if (!text) return res.status(400).json({ message: "Text is required" });
    const post = await postService.createPost(userId, text, image);
    await deleteCache("posts");
    return res.status(200).json({ created: true, post: post });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const updatePost = async (req, res) => {
  try {
    let { id } = req.params;
    let { body } = req;
    const savePost = await postService.updatePost({ _id: id }, body);
    await deleteCache("posts");
    await deleteCache(`posts:userId:${savePost.userId._id}`);
    return res.status(200).json({ updated: true, post: savePost });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const deletePost = async (req, res) => {
  try {
    let { id } = req.params;
    const post = await postService.deletePost(id);
    await deleteCache(`posts`);
    await deleteCache(`posts:userId:${post.userId._id}`);
    return res.status(200).json({ deleted: true, post: post });
  } catch (err) {
    console.log("error", err);
    return res.status(500).json({ error: err.message });
  }
};

const getUserPosts = async (req, res) => {
  try {
    let { id } = req.params;
    const post = await cache(`posts:userId:${id}`, async () => {
      const data = await postService.getUserPosts(id);
      return data;
    });
    return res.status(200).json({ post: post });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getPostById = async (req, res) => {
  try {
    let { id } = req.params;
    const post = await cache(`posts:${id}`, async () => {
      const data = await postService.getPostById(id);
      return data;
    });
    return res.status(200).json({ post: post });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const start = (page - 1) * limit;
    const posts = await cache(`page/${req.query.page}`, async () => {
      const data = await postService.getPosts(start, limit);
      return data;
    });
    return res.status(200).json({ posts: posts });
  } catch (err) {
    console.error(err);
  }
};

const likePost = async (req, res) => {
  try {
    let { id } = req.params;
    let userId = req.userId;
    const post = await postService.getPostById(id);
    if (!post.likes.includes(userId)) {
      await postService.likePost(post, userId);
      return res.status(200).json({ liked: "successfully" });
    } else {
      await postService.dislikePost(post, userId);
      return res.status(200).json({ disliked: "successfully" });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createPost,
  deletePost,
  getUserPosts,
  getPosts,
  updatePost,
  getPostById,
  likePost,
};
