const projectControllers = require("../controllers/project.controller")

const Router = require("express");
const router = Router();

router.post('/create', projectControllers.createProject)
router.get('/all_projects', projectControllers.getProjects)
router.get('/:id', projectControllers.getProject)
router.delete('/delete/:id', projectControllers.deleteProject)
router.put('/add_member/:id', projectControllers.addMembers)

module.exports = router;