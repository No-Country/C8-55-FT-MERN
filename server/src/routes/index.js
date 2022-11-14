const Router = require("express");
const router = Router();

router.use('/example', require('./example.route'))
router.use("/user", require("./user.route"))

module.exports = router;