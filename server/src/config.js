require("dotenv").config()

const DB = process.env.MONGODB_URI
const PORT = process.env.PORT || 3000;

module.exports = {DB,PORT}