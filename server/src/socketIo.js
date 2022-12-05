const jwt = require("jsonwebtoken");
const { SECRET } = require("./config");
const Notification = require("./models/Notification");
const Post = require("./models/Post");
const User = require("./models/User");
const socketOn = (io) => {
  let onlineUsers = [];
  const addNewUser = (mail, socketId) => {
    !onlineUsers.some((user) => user.mail === mail) &&
      onlineUsers.push({ mail, socketId });
  };
  const removeUser = (socketId) => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
  };
  const getUser = (mail) => {
    return onlineUsers.find((user) => user.mail == mail);
  };
  io.on("connection", (socket) => {
    socket.on("USERNAME", async ({ data }) => {
      const { token } = data;
      try {
        const verifyToken = jwt.verify(token, SECRET);
        const userToken = await User.findById(verifyToken.id);
        console.log(onlineUsers);

        addNewUser(userToken.mail, socket.id);
      } catch (e) {
        console.log(e.message);
      }
    });
    console.log("Nueva conexion");

    socket.on("NEW_COMMENT", async ({ data }) => {
      try {
        const { postId, token, type } = data;

        const verifyToken = jwt.verify(token, SECRET);
        const userToken = await User.findById(verifyToken.id);
        const post = await Post.findById(postId).populate("userId", {
          mail: 1,
        });
        const mail = post.userId.mail;

        const userPost = await User.findById(post.userId._id);

        const obj = {
          senderName: `${userToken.name} ${userToken.lastName}`,
          type,
          receiverId: userPost._id,
          postId,
          read: false,
          profileImage: userToken.profileImage,
        };
        const notification = new Notification(obj);
        userPost.notifications = [...userPost.notifications, notification._id];
        await notification.save();
        await userPost.save();
        const receiver = getUser(mail);
        // console.log(receiver)
        if(!receiver){
          return []
        }
        io.to(receiver.socketId).emit("GET_NOTIFICATION", notification);
      } catch (e) {
        console.log(e.message);
      }
    });
    socket.on("disconnect", () => {
      removeUser(socket.id);
    });
  });
};

module.exports = { socketOn };
