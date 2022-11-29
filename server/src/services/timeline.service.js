const User = require("../models/User");

const getTimeline = async (id, start, limit) => {
  const getTimeline = await User.findById(id, "following")
    .skip(start)
    .limit(limit)
    .lean()
    .populate({
      path: "following",
      select: "-password -socials",
      populate: {
        path: "posts",
        populate: [
          {
            path: "userId",
            select: { name: 1, lastName: 1, email: 1, profileImage: 1 },
          },
          {
            path: "comments",
            populate: [
              {
                path: "userId",
                select: { name: 1, lastName: 1, email: 1, profileImage: 1 },
              },
              {
                path: "replies",
                select: "-replies",
                populate: {
                  path: "userId",
                  select: { name: 1, lastName: 1, email: 1, profileImage: 1 },
                },
              },
            ],
          },
        ],
      },
    })
    .exec();

  const posts = getTimeline.following
    .map((user) =>
      user.posts.map((post) => {
        return post;
      })
    )
    .flat()
    .sort((a, b) => b.createdAt - a.createdAt);

  return { timeline: posts };
};

module.exports = { getTimeline };
