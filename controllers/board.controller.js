exports.getlist = (req, res) => {
    res.render("board/list");
};

exports.getwrite = (req, res) => {
    res.render("board/write");
};

exports.getview = (req, res) => {
    res.render("board/view");
};

exports.getmodify = (req, res) => {
    res.render("board/modify");
};

