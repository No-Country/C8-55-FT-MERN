const timelineController = require('../controllers/timeline.controller')

const Router = require("express");
const router = Router();

router.get('/:id', timelineController.getTimeline)

module.exports = router
