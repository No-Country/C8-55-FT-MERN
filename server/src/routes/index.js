const Router = require("express");
const router = Router();

router.use("/example", require("./example.route"));
router.use("/post", require("./post.route"));

module.exports = router;