const pool = require("./db");

exports.create = async (user) => {
    try {
        const { id, pw, userName, nickName, birth, gender, phone, tel } = user;
        const userdb = "id, pw, userName, nickName, birth, gender, phone, tel";
        const item = [id, pw, userName, nickName, birth, gender, phone, tel].map((v) => `"${v}"`).join(", ");
        await pool.query(`INSERT INTO user(${userdb}) value(${item});`);
        const [userid] = await pool.query(`SELECT id FROM user WHERE id="${id}"`);
        return userid;
    } catch (e) {
        throw new Error(e);
    }
};

exports.login = async (where) => {
    try {
        const { userId, userPw } = where;
        const [[result]] = await pool.query(`SELECT * FROM user WHERE id="${userId}" and pw="${userPw}";`);
        return result;
    } catch (e) {
        throw new Error(e);
    }
};

exports.findOne = async (userid) => {
    try {
        const [datas] = Object.entries(userid).map(([k, v]) => `${k}="${v}"`);
        const [[result]] = await pool.query(`SELECT * FROM user WHERE ${datas}`);
        return result;
    } catch (e) {
        throw new Error(e);
    }
};

exports.update = async (userid, data) => {
    try {
        const datas = Object.entries(data)
            .map(([k, v]) => `${k}="${v}"`)
            .join(", ");
        await pool.query(`UPDATE user SET ${datas} WHERE id="${userid}"`);
    } catch (e) {
        throw new Error(e);
    }
};

exports.delete = async (id) => {
    try {
        await pool.query(`DELETE FROM user where id="${id}"`);
    } catch (e) {
        throw new Error(e);
    }
};

