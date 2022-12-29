const express = require("express");
const router = express.Router();
const controller = require("../controllers/admin.controller");

router.get("/", (req, res) => {
  res.render("admin/login.html");
});

router.post("/login", controller.postLogin);

router.get("/userList", controller.getUser);

router.get("/userEdit", controller.getEditUser);

router.post("/userEdit", controller.postEditUser);

router.get("/boardList", (req, res) => {
  res.render("admin/board_list.html");
});

module.exports = router;
