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

exports.modify = async (modifyvalue) => {
    const result = await repository.modify(modifyvalue);
    return result;
};

exports.delete = async (idx) => {
    const result = await repository.delete(idx);
};
