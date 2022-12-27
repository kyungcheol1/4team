const repo = require("../repositories/user.repository");

exports.postjoin = async (user) => {
    const { userBirthyy, userBirthmm, userBirthdd } = user;
    const { userPhone, userPhoneMiddle, userPhoneLast } = user;
    const { userCall, userCallMiddle, userCallLast } = user;
    const birth = [userBirthyy, userBirthmm, userBirthdd].join("");
    const phone = [userPhone, userPhoneMiddle, userPhoneLast].join("-");
    const tel = [userCall, userCallMiddle, userCallLast].join("-");

    const item = {
        id: user.userId,
        pw: user.userPw,
        name: user.userName,
        nickName: user.userNickname,
        birth,
        gender: user.userGender,
        phone,
        tel,
    };
    const nick = await repo.create(item);
    console.log(nick);
    return nick;
};

const test = { userId: "qwe", userPw: "qwe" };

exports.postlogin = async ({ userId, userPw }) => {
    const where = { userId, userPw };
    console.log(where);
    const result = await repo.finduser(where);
    return result;
};

const postlogin = async ({ userId, userPw }) => {
    const where = { userId, userPw };
    console.log(where);
    // const result = await repo.login(where);
    // return result;
};

postlogin(test);

