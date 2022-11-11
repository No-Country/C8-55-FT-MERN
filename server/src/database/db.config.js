const mongoose = require("mongoose");

const DB = process.env.MONGODB_URI

const db = async () => {
  try {
    await mongoose.connect(DB);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = db;
