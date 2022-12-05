const User = require("../models/User");

const addFollowing = async (req, res) => {
  try{
  const userId = req.userId;
  const idUserFollowed = req.params.id;
  console.log(idUserFollowed);
  const user = await User.findById(userId);
  const userFollowed = await User.findById(idUserFollowed);

  if (!userFollowed) {
    return res.status(404).send({ error: "User to follow not found" });
  }

  if (idUserFollowed == userId) {
    return res.status(404).send({ error: "You can't follow yourself" });
  }
  if (user.following.includes(idUserFollowed)) {
    const newFollowing = user.following.filter(
      (u) => u.toString() !== userFollowed._id.toString()
    );
    const newFollowers = userFollowed.followers.filter(
      (u) => u.toString() !== user._id.toString()
    );
    user.following = newFollowing;
    userFollowed.followers = newFollowers;
    await user.save();
    return userFollowed.save().then((u) => {
      return res.send({
        auth: true,
        msg: `You don't follow ${u.name} anymore`,
        follow: false,
      });
    });
  }
  user.following = [...user.following, idUserFollowed];
  await user.save();
  userFollowed.followers = [...userFollowed.followers, user._id];
  return userFollowed.save().then((u) => {
    res.send({
      auth: true,
      msg: `You are now following ${u.name}`,
      follow: true,
    });
  });
}
catch(e){
  return res.status(404).send({error: e.message})
}
};



module.exports = { addFollowing };
