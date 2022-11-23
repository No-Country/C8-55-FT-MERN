const chatController = require("../controllers/chat.controller");
const { verifyToken } = require("../middlewares/verifyToken");
const Router = require("express");
const router = Router();

router.get("/get",chatController.getChat);