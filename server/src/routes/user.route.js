const User = require("../Models/User");
const Router = require("express");
const { signUp, signIn } = require("../controllers/user.controller");
const router = Router();

router.post("/signup", signUp);

router.get("/signin", signIn);

module.exports = router;