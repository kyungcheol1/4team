const pool = require("./db");

exports.findAll = async () => {
    const [result] = await pool.query(`SELECT * FROM board order by idx desc`);
    return result;
};

exports.insert = async (write) => {
    const [ins] = await pool.query(`INSERT INTO board(title, content, writer) value("${write.title}", "${write.content}", "null")`);
    const idx = ins.insertId;
    return idx;
};

exports.findOne = async (idx) => {
    await pool.query(`UPDATE board SET hit=hit+1 WHERE idx=${idx}`);
    const [sql, field] = await pool.query(`SELECT * FROM board WHERE idx=${idx}`);
    return sql;
};

exports.modify = async (modifyvalue) => {
    const [ins] = await pool.query(`UPDATE board SET title="${modifyvalue.title}", content="${modifyvalue.content}" WHERE idx="${modifyvalue.idx}";`);
    const idx = modifyvalue.idx;
    return idx;
};

exports.delete = async (idx) => {
    const [del] = await pool.query(`DELETE FROM board WHERE idx=${idx}`);
    return del;
};

exports.hitcount = async (idx) => {
    const [count] = await pool.query(`UPDATE board SET hit=hit+1 WHERE idx=${idx}`);
    return;
};
