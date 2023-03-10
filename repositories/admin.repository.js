const pool = require("./db");

exports.login = async ({ userId, userPw }) => {
  const [[result]] = await pool.query(`SELECT * FROM user WHERE id="${userId}" AND pw="${userPw}";`);
  return result;
};

exports.userLevelCheck = async ({ userId }) => {
  const [[result]] = await pool.query(`SELECT userLevel FROM user WHERE id="${userId}";`);
  return result;
};

exports.findUser = async () => {
  const [result] = await pool.query(`SELECT * FROM user;`);
  return result;
};

exports.getEditUser = async (id) => {
  const [[result]] = await pool.query(`SELECT * FROM user WHERE id="${id}";`);
  return result;
};

exports.update = async (data, id) => {
  const datas = Object.entries(data)
    .map(([key, val]) => `${key}='${val}'`)
    .join(", ");
  await pool.query(`UPDATE user SET ${datas} WHERE id="${id}";`);
};

exports.findBoard = async () => {
  const [result] = await pool.query(`SELECT idx, title, writer, content, date_format (registerDate,'%y-%m-%d %h:%i') AS registerDate, hit FROM board ORDER BY idx DESC;`);
  return result;
};

exports.deleteData = async ({ data }) => {
  const { table, key, value } = data;
  await pool.query(`DELETE FROM ${table} WHERE ${key}="${value}" `);
};

exports.popularContent = async () => {
  const [result] = await pool.query(`SELECT idx, title, writer, date_format (registerDate,'%y-%m-%d') AS registerDate, hit FROM board ORDER BY hit DESC LIMIT 3;`);
  return result;
};
