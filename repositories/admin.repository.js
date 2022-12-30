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

if (require.main === module) {
  (async () => {
    const [[result]] = await pool.query(`SELECT userLevel FROM user WHERE id="Team4_admin";`);
    console.log(result);
  })();
}

exports.update = async (data, id) => {
  const datas = Object.entries(data)
    .map(([key, val]) => `${key}='${val}'`)
    .join(", ");
  // await pool.query(`UPDATE user SET ${datas} WHERE id="${id}";`);
  console.log(datas);
};
