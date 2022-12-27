const express = require("express");
const router = express.Router();

router.get("/list", (req, res) => {
    res.render("board/list.html");
});

router.get("/write", (req, res) => {
    res.render("board/write.html");
});

module.exports = router;
