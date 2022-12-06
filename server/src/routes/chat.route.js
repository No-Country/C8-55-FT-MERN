const chatController = require("../controllers/chat.controller");
const { verifyToken } = require("../middlewares/verifyToken");
const Router = require("express");
const router = Router();

router.get("/get/:intId",verifyToken,chatController.getChat);
router.get("/get_chats",verifyToken,chatController.getChats);

module.exports = router;