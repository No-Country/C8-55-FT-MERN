const savedController = require('../controllers/saved.controller');

const Router = require("express");
const router = Router();

router.post('/save_post', savedController.savedPost) 
router.get('/user_saveds/:id', savedController.getUserSaveds) 
router.delete('/delete/:id', savedController.deleteSavedPost) 

module.exports = router