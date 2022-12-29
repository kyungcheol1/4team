const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/user.controller");

router.get("/join", usercontroller.getjoin);
router.post("/join", usercontroller.postjoin);
router.get("/login", usercontroller.getlogin);
router.post("/login", usercontroller.postlogin);
router.get("/profile", usercontroller.getprofile);
router.post("/profile", usercontroller.postprofile);
router.get("/welcome", usercontroller.getwelcome);
router.get("/delete", usercontroller.getdelete);
router.get("/logout", usercontroller.getlogout);
router.post("/join/idcheck", usercontroller.postidcheck);

module.exports = router;

