const router = require("express").Router()
const select = require("./selector/select")
const solved = require("./selector/solved")

router.get("/", select) // GET http://localhost:5000/api/selector
router.put("/:problem", solved) // PUT http://localhost:5000/api/selector/solved/

module.exports = router