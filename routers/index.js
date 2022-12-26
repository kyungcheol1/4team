const express = require("express");
const router = express.Router();
const user = require("./user.route");
const board = require("./board.route");

router.get("/", (req, res) => {
    res.render("index.html");
});

router.use("/user", user);

router.use("/board", board);

module.exports = router;
