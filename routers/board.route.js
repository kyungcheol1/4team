const express = require("express");
const router = express.Router();
const boardcontroller = require("../controllers/board.controller");

router.get("/list", boardcontroller.getlist);
router.get("/write", boardcontroller.getwrite);
router.get("/view", boardcontroller.getview);
router.get("/modify", boardcontroller.getmodify);

module.exports = router;

