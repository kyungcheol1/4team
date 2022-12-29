const express = require("express");
const router = express.Router();
const user = require("./user.route");
const board = require("./board.route");
const admin = require("./admin.route");

router.get("/", (req, res) => {
  const id = req.cookies.id;
  res.render("index.html", { id });
});

router.use("/user", user);

router.use("/board", board);

router.use("/admin", admin);

module.exports = router;
