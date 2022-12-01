const Post = require("../models/Post");
const User = require("../models/User");

const getUserPosts = async (id, start, limit) => {
  const posts = await Post.find({ userId: id })
    .lean()
    .skip(start)
    .limit(limit)
    .populate({
      path: "comments",
      select: "-postId",
      populate: {
        path: "userId",
        model: "User",
        select: { name: 1, lastName: 1, profileImage: 1, userRole: 1 },
      },
    })
    .populate({
      path: "userId",
      select: { name: 1, lastName: 1, profileImage: 1, userRole: 1 },
    });
  return posts;
};

const getPostById = async (id) => {
  return await Post.findById(id)
    .lean()
    .populate({
      path: "comments",
      model: "Comment",
      populate: [
        {
          path: "replies",
          populate: {
            path: "userId",
            select: { name: 1, lastName: 1, profileImage: 1, userRole: 1 },
          },
        },
        {
          path: "userId",
          select: { name: 1, lastName: 1, profileImage: 1, userRole: 1 },
        },
      ],
    })
    .populate({
      path: "userId",
      select: { name: 1, lastName: 1, profileImage: 1, userRole: 1 },
    });
};

const getPosts = async (start, limit) => {
  try {
    return await Post.find()
      .skip(start)
      .limit(limit)
      .lean()
      .populate({
        path: "comments",
        select: "-postId",
        populate: [
          {
            path: "userId",
            model: "User",
            select: { name: 1, lastName: 1, profileImage: 1, userRole: 1 },
          },
          {
            path: "replies",
            populate: [
              {
                path: "userId",
                select: { name: 1, lastName: 1, profileImage: 1, userRole: 1 },
              },
            ],
          },
        ],
      })
      .populate({
        path: "userId",
        select: { name: 1, lastName: 1, profileImage: 1, userRole: 1 },
      });
  } catch (err) {
    console.log("error", err);
  }
};

const createPost = async (userId, text, image) => {
  const post = new Post({ userId: userId, text: text, image: image });
  post
    .save()
    .then(async (p) => {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).send({ error: "Invalid ID" });
      }
      user.posts = [...user.posts, p._id];
      await user.save();
    })
    .catch((e) => {
      return res.status(404).send({ error: e.message });
    });
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
  const deletedPost = await Post.findByIdAndDelete(id);
  const user = await User.findById(deletedPost.userId);

  const oldPosts = user.posts.filter(
    (u) => u.toString() !== deletedPost._id.toString()
  );
  user.posts = oldPosts;
  await user.save();
  return deletedPost;
};

// const likePost = async (id, userId) => {
//   const post = await Post.findById(id);
//   if (!post.likes.includes(userId)) {
//     await post.updateOne({ $push: { likes: userId } });
//   } else {
//     await post.updateOne({ $pull: { likes: userId } });
//   }
// };

const likePost = async (post, userId) => {
  await Post.updateOne({ id: post._id, $push: { likes: userId } });
};
const dislikePost = async (post, userId) => {
  await post.updateOne({ $pull: { likes: userId } });
};

module.exports = {
  createPost,
  getUserPosts,
  getPosts,
  deletePost,
  updatePost,
  getPostById,
  likePost,
  dislikePost,
};
