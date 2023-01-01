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

router.get("/boardList", controller.getBoardList);

router.get("/delete", controller.deleteData);

router.post("/memberTask", controller.memberTasks);

router.post("/popularContent", controller.popularContent);

module.exports = router;
