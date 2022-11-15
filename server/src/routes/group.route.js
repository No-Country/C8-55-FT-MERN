const groupController = require("../controllers/group.controller");

const Router = require("express");
const router = Router();

router.get("/",groupController.getGroups);
router.get("/:id",groupController.getGroupById);
router.post("/",groupController.createGroup);
router.put("/:id",groupController.updateGroup);
router.delete("/:id",groupController.deleteGroup);

module.exports = router;