const groupController = require("../controllers/group.controller");

const Router = require("express");
const { verifyToken } = require("../middlewares/verifyToken");
const router = Router();
router.get("/", verifyToken ,groupController.getGroups);
router.get("/:id", verifyToken ,groupController.getGroupById);
router.post("/", verifyToken ,groupController.createGroup);
router.put("/:id", verifyToken ,groupController.updateGroup);
router.delete("/:id", verifyToken ,groupController.deleteGroup);

module.exports = router;