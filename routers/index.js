const express = require("express");
const router = express.Router();
const user = require("./user.route");
const board = require("./board.route");

router.get("/", (req, res) => {
    const id = req.cookies.id;
    res.render("index.html", { id });
});

router.use("/user", user);

router.use("/board", board);

module.exports = router;

