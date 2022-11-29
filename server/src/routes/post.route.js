const postController = require("../controllers/post.controller");
const { verifyToken } = require("../middlewares/verifyToken");
const Router = require("express");
const router = Router();

router.post("/create", verifyToken, postController.createPost);
router.get("/all_posts", postController.getPosts);
// router.get("/all_posts", verifyToken, postController.getPosts);
router.get("/user_posts/:id", postController.getUserPosts);
// router.get("/user_posts/:id", verifyToken, postController.getUserPosts);
router.get("/get_post/:id", verifyToken, postController.getPostById);
router.delete("/delete/:id", verifyToken, postController.deletePost);
router.put("/update/:id", verifyToken, postController.updatePost);
router.put("/like/:id", verifyToken, postController.likePost);

module.exports = router;
