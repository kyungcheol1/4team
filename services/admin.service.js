const repo = require("../repositories/admin.repository");

exports.loginData = async ({ userId, userPw }) => {
  const temp = ["userId", "userPw"];
  const loginData = { userId, userPw };
  const values = Object.values(loginData);
  const sendData = values
    .map((v) => {
      return v.replace(/\"|\'/g, "").replace(/ /g, "");
    })
    .reduce((acc, cur, index) => {
      acc[temp[index]] = cur;
      return acc;
    }, {});
  const result = await repo.login(sendData);
  if (result.userLevel === 3) {
    return result;
  } else return undefined;
};

exports.bringUser = async () => {
  const result = await repo.findUser();
  return result;
};

exports.getEditUser = async (id) => {
  const user = await repo.getEditUser(id);
  const [userBirthyy, userBirthmm, userBirthdd] = user.phone.split("-");
  const result = { ...user, userBirthyy, userBirthmm, userBirthdd };
  console.log(result);
  return user;
};
