const inputform = document.querySelector("#inputbtn");
const form = document.querySelector("#inputform");
const idcheck = document.querySelector("#checkid");
const nickcheck = document.querySelector("#nickcheckbtn");

// // const idvalue = document.querySelector("#userId");
// // const pwvalue = document.querySelector("#userPw");
// // const namevalue = document.querySelector("#userName");
// // const pwRpwvalue = document.querySelector("#userRpw");
// // const nickvalue = document.querySelector("#userNickname");
// // const userBirthyy = document.querySelector("#userBirthyy");
// // const userBirthmm = document.querySelector("#userBirthmm");
// // const userBirthdd = document.querySelector("#userBirthdd");
// // const userPhone = document.querySelector("#userPhone");
// // const userPhoneMiddle = document.querySelector("#userPhoneMiddle");
// // const userPhoneLast = document.querySelector("#userPhoneLast");

// // const pwRpwspan = document.querySelector(".userRpw > span");
// // const nickspan = document.querySelector(".userNick > span");
// // const namespan = document.querySelector(".userName > span");
// // const biryyspan = document.querySelector(".userBirthyy");
// // const birmmspan = document.querySelector(".userBirthmm");
// // const birddspan = document.querySelector(".userBirthdd");
// // const Callspan = document.querySelector(".userCall");
// // const Callmidspan = document.querySelector(".userCallMiddle");
// // const Calllastspan = document.querySelector(".userCallLast");

const uservalues = [...document.querySelectorAll("input")];
const uservalue = uservalues.reduce((acc, val, idx) => {
    acc[uservalues[idx].id] = val;
    return acc;
}, {});
console.log(uservalue);

const userspans = [...document.querySelectorAll("span")];
const userspan = userspans.reduce((acc, val, idx) => {
    acc[userspans[idx].className] = val;
    return acc;
}, {});

console.log(userspan);

const reg = {
    idreg: [/^[a-zA-Z0-9]{4,12}$/, "**4~12자의 영문 대소문자와 숫자로만 입력하여 주세요."],
    pwreg: [/^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{5,}$/, "**5글자 이상 소문자,숫자를 포함해주세요", "**비밀번호 값이 다릅니다"],
    namereg: [/^[a-zA-Z가-힣]{1,25}$/, "**이름은 최대 25자 영문 한글로만 입력이 가능합니다"],
    nickreg: [/^[a-zA-Z0-9가-힣]{2,25}$/, "**닉네임는 2~25자의 영문 대소문자와 숫자, 한글로만 입력하여 주세요."],
    yyreg: [/^[0-9]{4,4}$/, "**연도는 4글자숫자로 입력 가능합니다", "**연도를 확인해주세요"],
    ddreg: [/^[0-9]{2,2}$/, "**일자는 2글자숫자로 입력 해주세요 ex)1일 -> 01"],
    phoneheadreg: [/^[0-9]{3,3}$/, "**3글자숫자로 입력 가능합니다"],
    phonemidreg: [/^[0-9]{3,4}$/, "**3,4글자숫자로 입력 해주세요."],
};

// const set = {
//     idset: [uservalue.userId, userspan.idspan, reg.idreg[0], reg.idreg[1]],
//     pwset: [uservalue.userPw, userspan.pwspan, reg.pwreg[0], reg.pwreg[1]],
//     nameset: [uservalue.userName, userspan.namespan, reg.namereg[0], reg.namereg[1]],
//     nickset: [uservalue.userNickname, userspan.usernickspan, reg.nickreg[0], reg.nickreg[1]],
//     birthyyset: [uservalue.userBirthyy, userspan.userBirthyyspan, reg.yyreg[0], reg.yyreg[1]],
//     birthddset: [uservalue.userBirthdd, userspan.userBirthddspan, reg.ddreg[0], reg.ddreg[1]],
//     phoneset: [uservalue.userPhone, userspan.userPhonespan, reg.phoneheadreg[0], reg.phoneheadreg[1]],
//     phonemidset: [uservalue.userPhoneMiddle, userspan.userPhoneMiddlespan, reg.phonemidreg[0], reg.phonemidreg[1]],
//     phonelastset: [uservalue.userPhoneLast, userspan.userPhoneLastspan, reg.phonemidreg[0], reg.phonemidreg[1]],
// };
const date = new Date();

const findvalue = () => {
    if (val.value === "") {
        set[0].focus();
        span.innerHTML = `**필수 입력 정보입니다.`;
        return false;
    } else if (span.innerHTML === "") {
        return true;
    } else {
        val.focus();
    }
};

const checkHandler = (val, span, reg, messege) => {
    val.addEventListener("input", () => {
        if (!reg.test(val.value)) {
            span.style.color = "red";
            span.innerHTML = `${messege}`;
        } else {
            span.style.color = "red";
            span.innerHTML = "중복체크를 해주세요";
        }
    });
};
const inputHandler = (val, span, reg, messege) => {
    val.addEventListener("input", () => {
        if (!reg.test(val.value)) {
            span.innerHTML = `${messege}`;
        } else {
            span.innerHTML = "";
        }
    });
};

const pwcheckHandler = () => {
    uservalue.userPw.addEventListener("input", () => {
        if (!reg.pwreg[0].test(uservalue.userPw.value)) {
            userspan.pwspan.innerHTML = `${reg.pwreg[1]}`;
        } else {
            userspan.pwspan.innerHTML = "";
        }
        if (uservalue.userPw !== uservalue.userRpw) {
            userspan.rpwspan.innerHTML = `${reg.pwreg[2]}`;
        } else {
            userspan.rpwspan.innerHTML = "";
        }
    });
    uservalue.userRpw.addEventListener("input", () => {
        if (uservalue.userRpw !== uservalue.userPw) {
            userspan.rpwspan.innerHTML = `${reg.pwreg[2]}`;
        } else {
            userspan.rpwspan.innerHTML = "";
        }
    });
};

const BirthyyHandler = (val, span, reg, messege) => {
    val.addEventListener("input", () => {
        if (!reg.test(val.value)) {
            span.innerHTML = `${messege}`;
        } else if (val.value < 1900 || val.value > date.getFullYear()) {
            span.innerHTML = "연도를 확인해주세요";
        } else {
            span.innerHTML = "";
        }
    });
};

checkHandler(uservalue.userId, userspan.idspan, reg.idreg[0], reg.idreg[1]);
checkHandler(uservalue.userNickname, userspan.usernickspan, reg.nickreg[0], reg.nickreg[1]);
pwcheckHandler();
inputHandler(uservalue.userName, userspan.usernamespan, reg.namereg[0], reg.namereg[1]);
inputHandler(uservalue.userBirthyy, userspan.userBirthyyspan, reg.yyreg[0], reg.yyreg[1]);
inputHandler(uservalue.userBirthdd, userspan.userBirthddspan, reg.ddreg[0], reg.ddreg[1]);
inputHandler(uservalue.userPhone, userspan.userPhonespan, reg.phoneheadreg[0], reg.phoneheadreg[1]);
inputHandler(uservalue.userPhoneMiddle, userspan.userPhoneMiddlespan, reg.phonemidreg[0], reg.phonemidreg[1]);
inputHandler(uservalue.userPhoneLast, userspan.userPhoneLastspan, reg.phonemidreg[0], reg.phonemidreg[1]);

// const pwblurEvent = () => {
//     const reg = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{5,}$/;
//     pwvalue.addEventListener("blur", () => {
//         if (pwvalue.value === "") {
//             pwspan.innerHTML = `**값을 입력해 주세요.`;
//             return false;
//         } else if (!reg.test(pwvalue.value)) {
//             pwspan.innerHTML = "**5글자 이상 소문자,숫자를 포함해주세요";
//             return false;
//         } else {
//             pwspan.innerHTML = "";
//             return true;
//         }
//     });
// };

// const rpwblurEvent = (val, span) => {
//     val.addEventListener("blur", () => {
//         if (val.value === "") {
//             span.innerHTML = `**값을 입력해 주세요.`;
//             return false;
//         } else if (val.value !== pwvalue.value) {
//             span.innerHTML = "**비밀번호 값이 다릅니다";
//             return false;
//         } else if (val.value === pwvalue.value) {
//             span.innerHTML = "";
//             return true;
//         }
//     });
// };

// const nameblurEvent = () => {
//     const reg = /^[a-zA-Z가-힣]{1,25}$/;
//     namevalue.addEventListener("blur", () => {
//         if (namevalue.value === "") {
//             namespan.innerHTML = `**값을 입력해 주세요.`;
//             return false;
//         } else if (!reg.test(namevalue.value)) {
//             namespan.innerHTML = "**이름은 최대 25자 영문 한글로만 입력이 가능합니다";
//             return false;
//         } else {
//             namespan.innerHTML = "";
//             return true;
//         }
//     });
// };

// const birthblurEvent = () => {
//     const yyreg = /^[0-9]{4,4}$/;
//     const ddreg = /^[0-9]{2,2}$/;
//     userBirthyy.addEventListener("blur", () => {
//         if (userBirthyy.value === "") {
//             biryyspan.innerHTML = `**연도를 입력해 주세요.`;
//             return false;
//         } else if (!yyreg.test(userBirthyy.value)) {
//             biryyspan.innerHTML = "**연도는 4글자숫자로 입력 가능합니다";
//             return false;
//         } else if (userBirthyy.value < 1900 || userBirthyy.value > date.getFullYear()) {
//             biryyspan.innerHTML = "**연도를 확인해주세요";
//         } else {
//             biryyspan.innerHTML = "";
//             return true;
//         }
//     });
//     userBirthdd.addEventListener("blur", () => {
//         if (userBirthdd.value === "") {
//             birddspan.innerHTML = `**날짜를 입력해 주세요.`;
//             return false;
//         } else if (!ddreg.test(userBirthdd.value)) {
//             birddspan.innerHTML = "**일자는 2글자숫자로 입력 해주세요 ex)1일 -> 01";
//             return false;
//         } else {
//             birddspan.innerHTML = "";
//             return true;
//         }
//     });
// };

// const {}if (!phonereg.test(userPhone.value)) {
//             Callspan.innerHTML = "**3글자숫자로 입력 가능합니다";
//             return false;
//         } else {
//             Callspan.innerHTML = "";
//             return true;

// const phoneblurEvent = () => {
//     const phonereg = /^[0-9]{3,3}$/;
//     const phonemidreg = /^[0-9]{3,4}$/;
//     userPhone.addEventListener("blur", () => {
//         if (userPhone.value === "") {
//             Callspan.innerHTML = `**첫 값을 입력해 주세요.`;
//             return false;
//         } else if (!phonereg.test(userPhone.value)) {
//             Callspan.innerHTML = "**3글자숫자로 입력 가능합니다";
//             return false;
//         } else {
//             Callspan.innerHTML = "";
//             return true;
//         }
//     });
//     userPhoneMiddle.addEventListener("blur", () => {
//         if (userPhoneMiddle.value === "") {
//             Callmidspan.innerHTML = `**중간 값을 입력해 주세요.`;
//             return false;
//         } else if (!phonemidreg.test(userPhoneMiddle.value)) {
//             Callmidspan.innerHTML = "**3,4글자숫자로 입력 해주세요.";
//             return false;
//         } else {
//             Callmidspan.innerHTML = "";
//             return true;
//         }
//     });
//     userPhoneLast.addEventListener("blur", () => {
//         if (userPhoneLast.value === "") {
//             Calllastspan.innerHTML = `**마지막 값을 입력해 주세요.`;
//             return false;
//         } else if (!phonemidreg.test(userPhoneLast.value)) {
//             Calllastspan.innerHTML = "**3,4글자숫자로 입력 해주세요.";
//             return false;
//         } else {
//             Calllastspan.innerHTML = "";
//             return true;
//         }
//     });
// };

// const blurcheck = () => {
//     pwblurEvent();
//     idblurEvent();
//     rpwblurEvent(pwRpwvalue, pwRpwspan);
//     nameblurEvent();
//     birthblurEvent();
//     phoneblurEvent();
//     nickblurEvent();
// };

const printcheck = (check, val, span) => {
    if (!check) {
        val.focus();
        span.style.color = "red";
        span.innerHTML = "중복 아이디 입니다.";
    } else {
        span.style.color = "green";
        span.innerHTML = "생성이 가능합니다.";
    }
};

const idcheckHandler = async (e) => {
    e.preventDefault();
    let id = {
        id: uservalue.userId.value,
    };
    let respone = await fetch("http://localhost:3000/user/join/idcheck", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(id),
    });
    let json = await respone.json();
    let check = await json.check;

    if (userspan.idspan.innerHTML !== "중복체크를 해주세요" && userspan.idspan.innerHTML !== "생성이 가능합니다.") {
        alert("올바른 아이디 형식이 아닙니다.");
    } else {
        printcheck(check, uservalue.userId, userspan.idspan);
    }
};

const nickcheckHandler = async (e) => {
    e.preventDefault();
    let nick = {
        nickName: uservalue.userNickname.value,
    };
    let respone = await fetch("http://localhost:3000/user/join/idcheck", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(nick),
    });
    let json = await respone.json();
    let check = await json.check;

    if (userspan.usernickspan.innerHTML !== "중복체크를 해주세요" && userspan.usernickspan.innerHTML !== "생성이 가능합니다.") {
        alert("올바른 닉네임 형식이 아닙니다.");
    } else {
        printcheck(check, uservalue.userNickname, userspan.usernickspan);
    }
};

const formHandler = (e) => {
    e.preventDefault();
};

// const buttonHandler = (e) => {
//     e.preventDefault();
//     const phonelast = findvalue(userPhoneLast, Calllastspan);
//     const phonemid = findvalue(userPhoneMiddle, Callmidspan);
//     const phone = findvalue(userPhone, Callspan);
//     const birthdd = findvalue(userBirthdd, birddspan);
//     const birthmm = findvalue(userBirthmm, birmmspan);
//     const birthyy = findvalue(userBirthyy, biryyspan);
//     const name = findvalue(namevalue, namespan);
//     const pwRpw = findvalue(pwRpwvalue, pwRpwspan);
//     const pw = findvalue(pwvalue, pwspan);

//     if (nickspan.innerHTML !== "생성이 가능합니다.") {
//         alert("닉네임양식 확인과 중복체크를 완료해주세요");
//         nickvalue.focus();
//     } else if (phone && phonemid && phonelast && birthdd && birthmm && birthyy && name && pwRpw && pw) form.submit();
// };

// blurcheck();
nickcheck.addEventListener("click", nickcheckHandler);
idcheck.addEventListener("click", idcheckHandler);
form.addEventListener("submit", formHandler);
// inputform.addEventListener("click", buttonHandler);

