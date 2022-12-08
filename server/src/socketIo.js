const jwt = require("jsonwebtoken");
const { SECRET } = require("./config");
const Notification = require("./models/Notification");
const Post = require("./models/Post");
const User = require("./models/User");
const { sendMessage } = require("./services/message.service");
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
    socket.on("SEARCH_USER", async ({ data }) => {
      const dataSplit = data.split(" ");
      console.log(dataSplit[0]);

      const users = await User.find(
        {
          name: { $regex: dataSplit[0], $options: "i" },
          lastName: {
            $regex: dataSplit[2]
              ? ".*" + dataSplit[1] + " " + dataSplit[2] + ".*"
              : dataSplit[1]
              ? ".*" + dataSplit[1] + ".*"
              : "",
            $options: "i",
          },
        },
        { name: 1, lastName: 1, profileImage: 1 }
      ).limit(5);
      console.log(users);
      socket.emit("SEARCHED_USER", { data: users });
    });
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

    //Mensajes del Chat escucho NEW_MESSAGE
    socket.on("NEW_MESSAGE",async ({data})=>{
      try {
        //necesito que me pases en el data solamente el token,
        //el Id del usuario interlocutor y por ultimo el texto.
        //Los nombres de los 2 ultimos los tengo como intId y text
        const { token, intId, text } = data;

        //verificacion de token y obtencion del usuario y mail del interlocutor
        const verifyToken = jwt.verify(token, SECRET);
        const userToken = await User.findById(verifyToken.id);
        const intL = await User.findById(intId)
        const mail = intL.mail;

        //guardo el mensaje en la base de datos de chat y mensajes
        const userId = userToken._id.toString()
        const message = await sendMessage(userId,intId,text);

        //devuelvo la respuesta al front end con el nombre de GET_MESSAGE
        const receiver = getUser(mail);
        if(!receiver){
          return []
        }
        io.to(receiver.socketId).emit("GET_MESSAGE", message);
        //la respuesta por ahora es el id del usuario que envio, el mensaje,
        //la fecha de envio y actualizacion si lo queres de otra forma avisame
      } catch (err) {
        console.log(err);
      }
    });
    socket.on("disconnect", () => {
      removeUser(socket.id);
    });
  });
};

module.exports = { socketOn };
