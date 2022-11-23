////////////////////comspletar
const messageController = require("../controllers/message.controller")
const { verifyToken } = require("../middlewares/verifyToken");
const Router = require("express");
const router = Router();

router.post("/send",messageController.sendMessage);
router.get('/get_message/:id',messageController.getMessage);
router.delete('/delete/:id',messageController.deleteMessage);
router.put("/edit/:id",messageController.editMessage);

module.exports = router;