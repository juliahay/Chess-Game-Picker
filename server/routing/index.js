const router = require("express").Router();
const selector = require("./selector")

router.use("/selector", selector)

module.exports = router