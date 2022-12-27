const pool = require("./db");

exports.create = async (user) => {
    const { id, pw, name, nickName, birth, gender, phone, tel } = user;
    const userdb = "id, pw, name, nickName, birth, gender, phone, tel";
    const item = [id, pw, name, nickName, birth, gender, phone, tel].map((v) => `"${v}"`).join(", ");
    await pool.query(`INSERT INTO user(${userdb}) value(${item});`);
};

// const create = async () => {
//     const user = {
//         id: "qwe",
//         pw: "qwr",
//         name: "asf",
//         nuckName: "123",
//         birth: "123",
//         gender: "남자",
//         phone: "123213",
//         tel: "124124124",
//     };
//     const { id, pw, name, nickName, birth, gender, phone, tel } = user;
//     const userdb = "id, pw, name, nickName, birth, gender, phone, tel";
//     const item = [id, pw, name, nickName, birth, gender, phone, tel].map((v) => `"${v}"`).join(" ");
// };

// create();

// const create = async (user) => {
//     const userdb = "id, pw, name. nickName, birth, gender, phone, tel, level, registerDate";
//     console.log(user);
//     const [ins] = await pool.query(`INSERT INTO user(${userdb}) value(${login})`);
// };

// create();

