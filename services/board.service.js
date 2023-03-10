const repository = require("../repositories/board.repository");

// exports.list = async () => {
//     const result = await repository.findAll();
//     return result;
// };

exports.write = async (writevalue) => {
    const result = await repository.insert(writevalue);
    return result;
};

exports.view = async (index) => {
    const result = await repository.findOne(index);
    return result;
};

exports.findUser = async (idx) => {
    const result = await repository.findUser(idx);
    return result;
};

exports.modify = async (modifyvalue) => {
    const result = await repository.modify(modifyvalue);
    return result;
};

exports.delete = async (idx) => {
    const result = await repository.delete(idx);
};

exports.reply = async (pageidx) => {
    const result = await repository.replyAll(pageidx);
    return result;
};

exports.replylist = async (reply, writer, pageidx) => {
    const list = await repository.insertreply(reply, writer, pageidx);
    return list;
};
exports.list = async (pageNum) => {
    const viewlimit = 10;
    const limitlist = viewlimit * pageNum - viewlimit;

    const boardset = {
        viewlimit,
        limitlist,
    };

    const lists = await repository.boards(boardset);
    return lists;
};

exports.createPageBtn = async (pageNum) => {
    const totalboard = await repository.total();
    const viewlist = 10;
    const viewpagebtn = 5;
    const totalpage = Math.ceil(totalboard / viewlist);
    const count = Math.floor(pageNum / viewpagebtn);

    let clicklimit = Math.floor(totalpage / viewpagebtn);
    let pagearr = [];

    for (let i = 0; i <= clicklimit; i++) {
        pagearr.push([]);
        for (let j = 1; j < 6; j++) {
            let k = j + i * 5;
            if (k <= totalpage) pagearr[i].push(k);
        }
    }

    const pagebtn = { a: pagearr[count][0], b: pagearr[count][1], c: pagearr[count][2], d: pagearr[count][3], e: pagearr[count][4] };
    return pagebtn;
};

