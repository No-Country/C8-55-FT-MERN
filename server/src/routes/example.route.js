const exampleController = require('../controllers/example.controller')

const Router = require("express");
const router = Router();

router.get("/", exampleController)

module.exports = router;
