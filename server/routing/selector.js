const router = require("express").Router()
const select = require("./selector/select")
const solved = require("./selector/solved")

router.get("/", select)
router.put("/solved/:id", solved)

module.exports = router