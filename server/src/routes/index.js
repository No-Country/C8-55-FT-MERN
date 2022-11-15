const Router = require("express");
const router = Router();

router.use('/example', require('./example.route'))
router.use("/user", require("./user.route"))
router.use("/post", require("./post.route"));
router.use("/comment", require("./comment.route"));
router.use("/group", require("./group.route"));

module.exports = router;
