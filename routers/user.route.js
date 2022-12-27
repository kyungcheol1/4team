const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/user.controller");

router.get("/join", usercontroller.getjoin);
router.get("/login", usercontroller.getlogin);
router.get("/profile", usercontroller.getprofile);
router.get("/welcome", usercontroller.getwelcome);

module.exports = router;

