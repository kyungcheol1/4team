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
    const list = await service.list();
    res.render("board/list", { list });
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

exports.getview = async (req, res) => {
    const idx = req.query.index;
    const [list] = await service.view(idx);
    res.render("board/view", { list });
};

exports.getmodify = async (req, res) => {
    const idx = req.query.index;
    const userId = req.headers.cookie
        .split(";")
        .map((v) => v.split("="))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = v;
            return acc;
        }, {});
    const tandf = await service.findUser(idx);
    if (tandf !== userId.id) {
        res.send(`
        <script type="text/javascript">
        history.back()
    </script>
        `);
    } else {
        const [list] = await service.view(idx);
        res.render("board/modify", { list });
    }

    // const idx = req.query.index;
    // const [list] = await service.view(idx);
    // res.render("board/modify", { list });
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
