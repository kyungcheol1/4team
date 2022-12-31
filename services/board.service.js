const repository = require("../repositories/board.repository");

exports.list = async () => {
    const result = await repository.findAll();
    return result;
};

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
