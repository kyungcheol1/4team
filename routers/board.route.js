const express = require("express");
const router = express.Router();
const boardcontroller = require("../controllers/board.controller");

router.get("/list", boardcontroller.enter, boardcontroller.getlist);

router.get("/write", boardcontroller.enter, boardcontroller.getwrite);
router.post("/write", boardcontroller.enter, boardcontroller.postwrite);

router.get("/view", boardcontroller.enter, boardcontroller.getview);

router.get("/modify", boardcontroller.enter, boardcontroller.getmodify);
router.post("/modify", boardcontroller.enter, boardcontroller.postmodify);

router.get("/delete", boardcontroller.enter, boardcontroller.getdelete);

module.exports = router;
