const postService = require("../services/post.service");

const createPost = async (req, res) => {
  try {
    const {userId, text, image} = req.body;
    const post = await postService.createPost(userId, text, image);
    return res.status(200).json({ created: true, post: post });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const updatePost = async (req, res) => {
  try {
    let { id } = req.params;
    let { body } = req;
    const x = await postService.updatePost(id, body);
    return res.status(200).json({ updated: true, post: x });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const deletePost = async (req, res) => {
  try {
    let { id } = req.params;
    const post = await postService.deletePost(id);
    return res.status(200).json({ deleted: true, post: post });
  } catch (err) {
    console.log("error", err);
    return res.status(500).json({ error: err.message });
  }
};

const getPostById = async (req, res) => {
  try {
    let { id } = req.params;
    const post = await postService.getPost(id);
    return res.status(200).json({ post: post });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await postService.getPosts();
    return res.status(200).json({ posts: posts });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { createPost, deletePost, getPostById, getPosts, updatePost };
