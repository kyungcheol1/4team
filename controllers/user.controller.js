const service = require("../services/user.service");

exports.getjoin = (req, res) => {
    res.render("user/join");
};

exports.getlogin = (req, res) => {
    res.render("user/login");
};

exports.postlogin = async (req, res) => {
    const { userId, userPw } = req.body;
    const nickName = await service.postlogin({ userId, userPw });
    res.redirect("/");
};

exports.getprofile = (req, res) => {
    res.render("user/profile");
};

exports.postjoin = async (req, res) => {
    const user = req.body;
    const [nickname] = await service.postjoin(user);
    res.redirect(`welcome?nickname=${nickname.nickName}`);
};

exports.getwelcome = (req, res) => {
    const nickname = req.query;

    res.render("user/welcome");
};

