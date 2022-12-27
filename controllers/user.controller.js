const service = require("../services/user.service");

exports.getjoin = (req, res) => {
    res.render("user/join");
};

exports.getlogin = (req, res) => {
    res.render("user/login");
};

exports.postlogin = async (req, res, next) => {
    const { userId, userPw } = req.body;
    const info = await service.postlogin({ userId, userPw });
    if (info === undefined) return res.send("<script>alert('아이디나 비밀번호가 일치하지 않습니다');history.back()</script>");

    res.setHeader("Set-cookie", `usernick=${info.nickName}; Path=/;`);
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

