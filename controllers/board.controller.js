const service = require("../services/board.service");
const user = require("../services/user.service");

exports.enter = (req, res, next) => {
    const cookie = req.headers.cookie;
    if (cookie === undefined) {
        res.send(`<script type="text/javascript">
        alert("회원이 아닙니다.");
        history.back()
      </script>
       `);
    } else next();
    return;
};

exports.getlist = async (req, res) => {
    let { pageNum } = req.query;
    if (pageNum === undefined) pageNum = 1;
    const [list, count] = await service.list(pageNum);
    const pagebtn = await service.createPageBtn(pageNum);
    res.render("board/list", { list, count, pagebtn });
};

exports.getwrite = (req, res) => {
    res.render("board/write");
};

exports.postwrite = async (req, res) => {
    const writevalue = req.body;

    const cookie = req.headers.cookie
        .split(";")
        .map((v) => v.split("="))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = v;
            return acc;
        }, {}); //{ id: 'mood' }

    const value = Object.assign(writevalue, cookie);
    const idx = await service.write(value);
    res.redirect(`/board/view?index=${idx}`);
};

exports.getview = async (req, res, next) => {
    const idx = req.query.index;
    const [list] = await service.view(idx);
    const reply = await service.reply(idx); // 얘를 어떻게 뿌리징,,,[{},{},{}]
    const [cookie] = req.headers.cookie.split(";").map((v) => v.split("="));
    list.cookies = cookie[1];
    res.render("board/view", { list, reply });
};

exports.getmodify = async (req, res) => {
    const idx = req.query.index;
    let [list] = await service.view(idx);
    res.render("board/modify", { list });
};

exports.postmodify = async (req, res) => {
    const modifyvalue = req.body;
    const idx = await service.modify(modifyvalue);
    res.redirect(`/board/view?index=${idx}`);
};

exports.getdelete = async (req, res) => {
    const idx = req.query.index;
    const deletevalue = await service.delete(idx);
    res.redirect("/board/list");
};

exports.postreply = async (req, res) => {
    const reply = req.body;
    const writer = req.cookies;
    const pageidx = req.query.index;
    const list = await service.replylist(reply, writer, pageidx);
    res.redirect(`/board/view?index=${list}`);
};

