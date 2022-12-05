const User = require("../models/User");
const Router = require("express");
const {
  signUp,
  signIn,
  userPosts,
  tokenInfo,
  userInfo,
  updateUser,
} = require("../controllers/user.controller");
const { verifyToken } = require("../middlewares/verifyToken");
const { addFollowing } = require("../controllers/following.controllers");
const {
  getNotifications,
  updateNotifications,
} = require("../controllers/notification.controller");

const router = Router();

router.post("/signup", signUp);

router.post("/signin", signIn);

router.post("/addfollowing/:id", verifyToken, addFollowing);

router.get("/tokenInfo", tokenInfo);

router.get("/userInfo/:id", verifyToken, userInfo);

router.get("/getnotifications", verifyToken, getNotifications);

router.patch("/updatenotifications", verifyToken, updateNotifications);

router.patch("/updateuser", verifyToken, updateUser);
module.exports = router;
