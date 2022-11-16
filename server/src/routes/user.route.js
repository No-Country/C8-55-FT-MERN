const User = require("../models/User");
const Router = require("express");
const { signUp, signIn, userPosts } = require("../controllers/user.controller");
const { verifyToken } = require("./verifyToken.routes");
const router = Router();

router.post("/signup", signUp);

router.post("/signin", signIn);






module.exports = router;
