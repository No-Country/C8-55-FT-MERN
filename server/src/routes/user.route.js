const User = require("../models/User");
const Router = require("express");
const { signUp, signIn, userPosts } = require("../controllers/user.controller");
const { verifyToken } = require("../middlewares/verifyToken");
const { addFollowing } = require("../controllers/following.controllers");

const router = Router();

router.post("/signup", signUp);

router.post("/signin", signIn);

router.post("/addfollowing/:id", verifyToken, addFollowing)





module.exports = router;
