const Saved = require("../models/Saved");

const findSaveds = async (userId, postId) => {
  const post = await Saved.find({ userId: userId, postId: postId });
  if (post) {
    return post;
  }
};

const savePost = async (userId, postId) => {
  return await Saved.create({ userId, postId });
};

const getUserSaveds = async (id) => {
  const userSaveds = await Saved.find({ userId: id }).populate({
    path: "postId",
    populate: {
      path: "userId",
      select: { name: 1, lastName: 1, profileImage: 1 },
    },
  });
  return userSaveds;
};

const deleteSaved = async (id) => {
  const saved = await Saved.findByIdAndDelete(id);
  return saved;
};

module.exports = {
  savePost,
  getUserSaveds,
  deleteSaved,
  findSaveds,
};
