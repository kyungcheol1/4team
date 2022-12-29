const pool = require("./db");

exports.create = async (user) => {
    const { id, pw, userName, nickName, birth, gender, phone, tel } = user;
    const userdb = "id, pw, userName, nickName, birth, gender, phone, tel";
    const item = [id, pw, userName, nickName, birth, gender, phone, tel].map((v) => `"${v}"`).join(", ");
    await pool.query(`INSERT INTO user(${userdb}) value(${item});`);
    const [userid] = await pool.query(`SELECT id FROM user WHERE id="${id}"`);
    return userid;
};

exports.login = async (where) => {
    const { userId, userPw } = where;
    const [[result]] = await pool.query(`SELECT * FROM user WHERE id="${userId}" and pw="${userPw}";`);
    return result;
};

exports.findOne = async (userid) => {
    const [[result]] = await pool.query(`SELECT * FROM user WHERE id="${userid}"`);
    return result;
};

exports.update = async (userid, data) => {
    console.log(data);
    const datas = Object.entries(data)
        .map(([k, v]) => `${k}="${v}"`)
        .join(", ");
    await pool.query(`UPDATE user SET ${datas} WHERE id="${userid}"`);
};

exports.delete = async (id) => {
    await pool.query(`DELETE FROM user where id="${id}"`);
};

