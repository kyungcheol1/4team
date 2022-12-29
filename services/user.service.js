const repo = require("../repositories/user.repository");

exports.postjoin = async (user) => {
    const item = sendData(user);
    const userid = await repo.create(item);
    return userid;
};

exports.postlogin = async ({ userId, userPw }) => {
    const where = { userId, userPw };
    const result = await repo.login(where);
    return result;
};

exports.update = async (userid, data) => {
    const datas = sendData(data);
    await repo.update(userid, datas);
};

exports.getuserinfo = async (userid) => {
    const result = await repo.findOne(userid);
    const item = renddata(result);
    return item;
};

exports.idcheck = async (userid) => {
    const result = await repo.findOne(userid);
    const tandf = result === undefined ? true : false;
    return tandf;
};

exports.delete = async (id) => {
    await repo.delete(id);
};

const sendData = (user) => {
    const { userBirthyy, userBirthmm, userBirthdd } = user;
    const { userPhone, userPhoneMiddle, userPhoneLast } = user;
    const { userCall, userCallMiddle, userCallLast } = user;
    const birth = [userBirthyy, userBirthmm, userBirthdd].join("-");
    const phone = [userPhone, userPhoneMiddle, userPhoneLast].join("-");
    const tel = [userCall, userCallMiddle, userCallLast].join("-");

    const item = {
        id: user.id,
        pw: user.pw,
        userName: user.userName,
        nickName: user.nickName,
        birth,
        gender: user.gender,
        phone,
        tel,
    };
    return item;
};

const renddata = (result) => {
    const [userPhone, userPhoneMiddle, userPhoneLast] = result.phone.split("-");
    const [userBirthyy, userBirthmm, userBirthdd] = result.birth.split("-");
    const [userCall, userCallMiddle, userCallLast] = result.tel.split("-");
    const item = {
        ...result,
        userPhone,
        userPhoneMiddle,
        userPhoneLast,
        userBirthyy,
        userBirthmm,
        userBirthdd,
        userCall,
        userCallMiddle,
        userCallLast,
    };
    delete item.birth;
    delete item.phone;
    delete item.tel;
    return item;
};

