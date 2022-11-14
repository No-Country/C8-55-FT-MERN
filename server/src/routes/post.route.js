const postController = require("../controllers/post.controller");

const Router = require("express");
const router = Router();

router.post("/", postController.createPost);
router.get("/", postController.getPosts);
router.get("/:id", postController.getPostById);
router.delete("/:id", postController.deletePost);
router.put("/:id", postController.updatePost);

module.exports = router;
