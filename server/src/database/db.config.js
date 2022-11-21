const mongoose = require("mongoose");
const { DB } = require("../config");


const db = async () => {
  try {
   
    await mongoose.connect(DB);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = db;
