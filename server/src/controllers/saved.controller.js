const savedService = require("../services/saved.service");

const savedPost = async (req, res) => {
  const { userId, postId } = req.body;
  try {
    const post = await savedService.findSaveds(userId, postId);
    if (post.length === 0) {
      const saved = await savedService.savePost(userId, postId);
      return res.status(200).json({ saved: "successfully", savePost: saved });
    } else {
      return res.status(404).json("This post is already saved");
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getUserSaveds = async (req, res) => {
  try {
    const { id } = req.params;
    const userSaveds = await savedService.getUserSaveds(id);
    return res.status(200).json({ saveds: userSaveds });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const deleteSavedPost = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSaved = await savedService.deleteSaved(id);
    return res.status(200).json({ deleted: "successfully", deleteSaved });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  savedPost,
  getUserSaveds,
  deleteSavedPost,
};
