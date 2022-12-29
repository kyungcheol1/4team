const repo = require("../repositories/admin.repository");

const levelCheck = (userId) => {
  if (userId === undefined) return false;
  return async () => {
    const [[result]] = await repo.userLevelCheck(userId);
    if (result.userLevel === 3) {
      console.log(result);
      return true;
    } else return false;
  };
};

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

exports.bringUser = async ({ cookie }) => {
  if (levelCheck(cookie)) {
    const result = await repo.findUser();
    return result;
  } else return undefined;
};

exports.getEditUser = async ({ id, cookie }) => {
  if (levelCheck(cookie)) {
    const user = await repo.getEditUser(id);
    const [userBirthyy, userBirthmm, userBirthdd] = user.birth.split("-");
    const [userPhone, userPhoneMiddle, userPhoneLast] = user.phone.split("-");
    if (user.tel === null) user.tel = "--";
    const [userCall, userCallMiddle, userCallLast] = user.tel.split("-");
    const result = { ...user, userBirthyy, userBirthmm, userBirthdd, userPhone, userPhoneMiddle, userPhoneLast, userCall, userCallMiddle, userCallLast };
    return result;
  } else return undefined;
};

exports.postEditUSer = async ({ userData, cookie }) => {
  if (levelCheck(cookie)) {
    const { userBirthyy, userBirthmm, userBirthdd, userPhone, userPhoneMiddle, userPhoneLast, userCall, userCallMiddle, userCallLast, ...rest } = userData;
    const birth = [userBirthyy, userBirthmm, userBirthdd].join("-");
    const phone = [userPhone, userPhoneMiddle, userPhoneLast].join("-");
    delete rest.userRpw;
    let tel = [userCall, userCallMiddle, userCallLast].join("-");
    if (tel === "--") tel = null;
    const editData = { ...rest, birth, phone, tel };
    console.log(editData);
  } else return undefined;
};
