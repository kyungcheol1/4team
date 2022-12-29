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
    res.setHeader("Set-cookie", `id=${info.id}; Path=/;`);
    res.redirect("/");
};

exports.postjoin = async (req, res) => {
    const user = req.body;
    const [userid] = await service.postjoin(user);
    res.redirect(`welcome?userid=${userid.id}`);
};

exports.getwelcome = async (req, res) => {
    const { userid } = req.query;
    const list = await service.getuserinfo(userid);
    res.render("user/welcome", { list });
};

exports.getprofile = async (req, res) => {
    const { id } = req.cookies;
    const list = await service.getuserinfo(id);
    res.render("user/profile", { list });
};

exports.postprofile = async (req, res) => {
    const { id } = req.cookies;
    const data = req.body;
    await service.update(id, data);
    res.redirect("profile");
};

exports.getlogout = (req, res) => {
    res.clearCookie("id");
    res.redirect("/");
};

exports.getdelete = async (req, res) => {
    const { id } = req.cookies;
    res.clearCookie("id");
    await service.delete(id);
    res.redirect("/");
};

exports.postidcheck = async (req, res) => {
    const { userid } = req.body;
    const check = await service.idcheck(userid);
    console.log(check);
    res.json({ code: "200", message: "sucess!", check });
};

