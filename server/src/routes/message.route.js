////////////////////comspletar
const messageController = require("../controllers/message.controller")
const { verifyToken } = require("../middlewares/verifyToken");
const Router = require("express");
const router = Router();

router.post("/create",messageController.createMessage);
router.get('/get_message/:id',messageController.getMessage);
router.delete('/delete/:id',messageController.deleteMessage);
router.put("/update/:id",messageController.updateMessage);

module.exports = router;