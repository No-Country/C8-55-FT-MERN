const commentController = require('../controllers/comment.controller')

const Router = require("express");
const router = Router();

router.get('/:id', commentController.getUserComments)
router.post('/', commentController.createComment)
router.put('/reply/:id', commentController.createReply)

module.exports = router;