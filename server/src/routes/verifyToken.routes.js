const jwt = require("jsonwebtoken");
const { SECRET } = require("../config");
const User = require("../models/User");

const verifyToken = async (req, res, next) => {
  try {
    const verifyToken = jwt.verify(req.get("authorization"), SECRET);
    const user = await User.findById(verifyToken.id);
    if (!user) {
      return res
        .status(404)
        .send({ auth: false, msg: "Authentication failed" });
    }
    req.userId = user._id;
    next();
  } catch (e) {
    return res.status(404).send({ error: e.message });
  }
};

module.exports = { verifyToken };
