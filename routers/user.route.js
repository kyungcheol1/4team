const express = require("express");
const router = express.Router();

router.get("/join", (req, res) => {
    res.send("hi");
});

module.exports = router;
