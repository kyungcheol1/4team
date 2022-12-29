const pool = require("./db");

exports.login = async ({ userId, userPw }) => {
  const [[result]] = await pool.query(`SELECT * FROM user WHERE id="${userId}" AND pw="${userPw}"`);
  console.log(result);
  return result;
};

exports.findUser = async () => {
  const [result] = await pool.query(`SELECT * FROM user;`);
  return result;
};

exports.getEditUser = async (id) => {
  const [[result]] = await pool.query(`SELECT * FROM user WHERE id="${id}"`);
  return result;
};
