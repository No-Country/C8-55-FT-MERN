const savedController = require('../controllers/saved.controller');

const Router = require("express");
const { verifyToken } = require('../middlewares/verifyToken');
const router = Router();

router.post('/save_post', verifyToken,savedController.savedPost) 
router.get('/user_saveds/:id', verifyToken,savedController.getUserSaveds) 
router.delete('/delete/:id', verifyToken,savedController.deleteSavedPost) 

module.exports = router