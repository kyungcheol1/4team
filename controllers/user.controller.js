const service = require("../services/user.service");

exports.getjoin = (req, res) => {
    res.render("user/join");
};

exports.getlogin = (req, res) => {
    res.render("user/login");
};

exports.getprofile = (req, res) => {
    res.render("user/profile");
};

exports.postjoin = async (req, res) => {
    const user = req.body;
    await service.postjoin(user);
    res.redirect("welcome");
};

exports.getwelcome = (req, res) => {
    res.render("user/welcome");
};

