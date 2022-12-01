const timelineController = require('../controllers/timeline.controller')

const Router = require("express");
const { verifyToken } = require('../middlewares/verifyToken');
const router = Router();

router.get('/:id',timelineController.getTimeline)
// router.get('/:id', verifyToken,timelineController.getTimeline)

module.exports = router
