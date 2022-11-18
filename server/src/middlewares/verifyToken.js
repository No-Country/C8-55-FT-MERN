const jwt = require("jsonwebtoken");
const { SECRET } = require("../config");
const User = require("../models/User");

const verifyToken = async (req, res, next) => {
  try {
    if (!req.get("Authorization")) {
      return res
        .status(404)
        .send({ auth: false, error: "A token is required for authentication" });
    }
    const token = req.get("Authorization").substring(7)
    const verifyToken = jwt.verify(token, SECRET);
    const user = await User.findById(verifyToken.id);
    if (!user) {
      return res
        .status(404)
        .send({ auth: false, msg: "Authentication failed" });
    }
    req.userId = user._id;
    next();
  } catch (e) {
    return res.status(404).send({ auth: false, error: e.message });
  }
};

module.exports = { verifyToken };
