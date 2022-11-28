const socketOn = (io) => {
  io.on("connection", (socket) => {
    console.log("Nueva conexion:", socket.id);
    socket.on("Prueba 2", (response) => {
      console.log(response);
      io.sockets.emit("prueba", { msg: "Me llego todo bien wacho" });
    });
  });
};

module.exports = { socketOn };
