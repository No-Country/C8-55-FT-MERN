const commentController = require('../controllers/comment.controller')

const Router = require("express");
const router = Router();

router.get('/user_comment/:id', commentController.getUserComments)
router.get('/get_comment/:id', commentController.findCommentById)
router.post('/', commentController.createComment)
router.put('/reply', commentController.createReply)
router.put('/like/:id', commentController.likeComment)

module.exports = router;