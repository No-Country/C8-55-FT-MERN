const Post = require("../models/Post");

const getUserPosts = async (id) => {
  const posts = await Post.find({ id })
    .lean()
    .populate({
      path: "comments",
      select: "-postId",
      populate: {
        path: "userId",
        model: "User",
        select: { name: 1, lastName: 1, profileImage: 1 },
      },
    });
  return posts;
};

const getPostById = async (id) => {
  return await Post.findById(id);
};

const getPosts = async () => {
  try {
    return await Post.find().lean();
  } catch (err) {
    console.log("error", err);
  }
};

const createPost = async (userId, text, image) => {
  const post = new Post({ userId: userId, text: text, image: image });
  await post.save();
};

const updatePost = async (id, body) => {
  try {
    return Post.findOneAndUpdate(
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

const deletePost = async (id) => {
  return Post.findByIdAndRemove(id);
};

// const likePost = async (id, userId) => {
//   const post = await Post.findById(id);
//   if (!post.likes.includes(userId)) {
//     await post.updateOne({ $push: { likes: userId } });
//   } else {
//     await post.updateOne({ $pull: { likes: userId } });
//   }
// };

const likePost = async(post, userId) => {
  await post.updateOne({ $push: { likes: userId } });
}
const dislikePost = async(post, userId) => {
  await post.updateOne({ $pull: { likes: userId } });
}

module.exports = {
  createPost,
  getUserPosts,
  getPosts,
  deletePost,
  updatePost,
  getPostById,
  likePost,
  dislikePost
};
