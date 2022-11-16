const User = require("../models/User");
const Router = require("express");
const { signUp, signIn } = require("../controllers/user.controller");
const router = Router();

router.post("/signup", signUp);

router.post("/signin", signIn);

module.exports = router;
