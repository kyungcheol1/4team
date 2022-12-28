const express = require("express");
const router = express.Router();
const boardcontroller = require("../controllers/board.controller");

router.get("/list", boardcontroller.getlist);

router.get("/write", boardcontroller.getwrite);
router.post("/write", boardcontroller.postwrite);

router.get("/view", boardcontroller.getview);

router.get("/modify", boardcontroller.getmodify);
router.post("/modify", boardcontroller.postmodify);

router.get("/delete", boardcontroller.getdelete);

module.exports = router;
