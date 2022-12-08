const { socketOn } = require("./socketIo");
const db = require("./database/db.config");
const { app } = require("./app");
const { PORT, NODE_ENV } = require("./config");

const http = require("http")
  .createServer(app)
  .listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}/ ​​​🤟​😎​`);
  });
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

socketOn(io);

db().then(() => {
  console.log("connected to database");
});

module.exports = { io };