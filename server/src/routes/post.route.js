const postController = require("../controllers/post.controller");

const Router = require("express");
const router = Router();

router.post("/create", postController.createPost);
router.get("/all_posts", postController.getPosts);
router.get("/user_posts/:id", postController.getUserPosts);
router.get("/get_post/:id", postController.getPostById);
router.delete("/delete/:id", postController.deletePost);
router.put("/update/:id", postController.updatePost);

module.exports = router;
