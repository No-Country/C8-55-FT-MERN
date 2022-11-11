const Router = require("express");
const router = Router();

router.use('/example', require('./example.route'))

module.exports = router;