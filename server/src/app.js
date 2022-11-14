require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const { urlencoded } = require("body-parser");
const db = require("./database/db.config");
const routes = require("./routes/index");
const { PORT } = require("./config");

const app = express();
db().then(() => {
  console.log("connected to database");
});

//middlewares
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use('/', routes)


app.set("port", PORT || 3000);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}/ ​​​🤟​😎​`);
});