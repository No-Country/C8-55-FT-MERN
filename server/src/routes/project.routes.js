const projectControllers = require("../controllers/project.controller")

const Router = require("express");
const { verifyToken } = require("../middlewares/verifyToken");
const router = Router();

router.post('/create',verifyToken, projectControllers.createProject)
router.get('/all_projects', verifyToken, projectControllers.getProjects)
router.get('/:id', verifyToken,projectControllers.getProject)
router.delete('/delete/:id', verifyToken,projectControllers.deleteProject)
router.put('/add_member/:id', verifyToken,projectControllers.addMembers)

module.exports = router;