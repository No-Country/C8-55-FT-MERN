const postService = require("../services/post.service");

const createPost = async (req, res) => {
  try {
    const userId = req.userId
    const {text, image } = req.body;
    if (!userId)
      return res.status(404).json({ message: "User id is required" });
    if (!text) return res.status(400).json({ message: "Text is required" });
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
    const savePost = await postService.updatePost(id, body);
    return res.status(200).json({ updated: true, post: savePost });
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

const getUserPosts = async (req, res) => {
  try {
    let { id } = req.params;
    const { page = 1, limit = 5} = req.query; 
    const start = (page - 1) * limit;
    const post = await postService.getUserPosts(id, start, limit);
    return res.status(200).json({ post: post });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getPostById = async (req, res) => {
  try {
    let { id } = req.params;
    const post = await postService.getPostById(id);
    return res.status(200).json({ post: post });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query; 
    const start = (page - 1) * limit;
    const posts = await postService.getPosts(start, limit);
    return res.status(200).json({ posts: posts });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const likePost = async (req, res) => {
  try{
    let { id } = req.params;
    let userId = req.userId;
    const post = await postService.getPostById(id);
    if(!post.likes.includes(userId)){
      await postService.likePost(post, userId)
      return res.status(200).json({"liked": "successfully"});
    }else{
      await postService.dislikePost(post, userId)
      return res.status(200).json({"disliked": "successfully"});
    }
  }catch(err){
    return res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createPost,
  deletePost,
  getUserPosts,
  getPosts,
  updatePost,
  getPostById,
  likePost
};
