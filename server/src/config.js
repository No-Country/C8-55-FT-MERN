require("dotenv").config();

const DB = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;
const SECRET = process.env.SECRET;

module.exports = { DB, PORT, SECRET };
