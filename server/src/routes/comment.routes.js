const commentController = require('../controllers/comment.controller')
const {verifyToken} = require("../middlewares/verifyToken")
const Router = require("express");
const router = Router();

router.get('/user_comment/:id',verifyToken, commentController.getUserComments)
router.get('/get_comment/:id', verifyToken ,commentController.findCommentById)
router.post('/', verifyToken,commentController.createComment)
router.put('/reply', verifyToken,commentController.createReply)
router.put('/like/:id', verifyToken,commentController.likeComment)
router.delete('/delete/:id', verifyToken,commentController.deleteComment)
router.put('/update/:id', verifyToken,commentController.updateComment)

module.exports = router;