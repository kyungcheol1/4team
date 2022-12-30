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
    const result = await repository.findUser(idx); // 해당글의 작성자 스트링
    return result;
};

exports.modify = async (modifyvalue) => {
    const result = await repository.modify(modifyvalue);
    return result;
};

exports.delete = async (idx) => {
    const result = await repository.delete(idx);
};

exports.replylist = async (writer, reply) => {
    const list = await repository.insertreply(writer, reply);
    return list;
};

