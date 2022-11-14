const Post = require("../models/Post");

const getPost = async (id) => {
  return await Post.findById(id);
};

const getPosts = async () => {
  try {
    return await Post.find();
  } catch (err) {
    console.log("error", err);
  }
};

const createPost = async (body) => {
  return await Post.create(body);
};

const updatePost = async (id, body) => {
  return Post.findOneAndUpdate(id, body);
};

const deletePost = async (id) => {
  return Post.findByIdAndRemove(id);
};

module.exports = { createPost, getPost, getPosts, deletePost, updatePost };
