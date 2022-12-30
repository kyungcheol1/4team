const repo = require("../repositories/admin.repository");

const levelCheck = (userId) => {
  if (userId === undefined) return false;
  return async () => {
    const [[result]] = await repo.userLevelCheck(userId);
    if (result.userLevel === 3) {
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
  if (result === undefined) return undefined;
  if (result.userLevel === 3) return result;
  return undefined;
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

exports.postEditUSer = async ({ userData, cookie, id }) => {
  if (levelCheck(cookie)) {
    const { userBirthyy, userBirthmm, userBirthdd, userPhone, userPhoneMiddle, userPhoneLast, userCall, userCallMiddle, userCallLast, ...rest } = userData;
    const birth = [userBirthyy, userBirthmm, userBirthdd].join("-");
    const phone = [userPhone, userPhoneMiddle, userPhoneLast].join("-");
    let tel = [userCall, userCallMiddle, userCallLast].join("-");
    delete rest.rpw;

    if (rest.pw === "") delete rest.pw;
    const editData = { ...rest, birth, phone, tel };
    if (tel === "--") delete editData.tel;
    await repo.update(editData, id);
    return true;
  } else return undefined;
};

exports.bringBoard = async ({ cookie }) => {
  if (levelCheck(cookie)) {
    const result = await repo.findBoard();
    return result;
  } else return undefined;
};

exports.deleteData = async ({ cookie, data }) => {
  if (levelCheck(cookie)) {
    await repo.deleteData({ data });
    return true;
  } else return undefined;
};
