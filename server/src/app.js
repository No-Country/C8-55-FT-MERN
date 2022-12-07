require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const { urlencoded } = require("body-parser");
const routes = require("./routes/index");
const { PORT } = require("./config");

//swagger
const swaggerUI = require("swagger-ui-express");
const documentation = require("./helpers/documentation");

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use("/", routes);
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(documentation));

app.set("port", PORT || 3000);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

module.exports = { app };
