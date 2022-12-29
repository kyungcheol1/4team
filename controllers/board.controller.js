const service = require("../services/board.service");
const user = require("../services/user.service");

exports.getlist = async (req, res) => {
    const list = await service.list();
    res.render("board/list", { list });
};

exports.getwrite = (req, res) => {
    res.render("board/write");
};

exports.postwrite = async (req, res) => {
    const writevalue = req.body;
    const idx = await service.write(writevalue);
    res.redirect(`/board/view?index=${idx}`);
};

exports.getview = async (req, res) => {
    const idx = req.query.index;
    const [list] = await service.view(idx);
    res.render("board/view", { list });
};

exports.getmodify = async (req, res) => {
    const idx = req.query.index;
    const [list] = await service.view(idx);
    // console.log(list);
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
