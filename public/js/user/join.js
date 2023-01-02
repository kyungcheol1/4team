const inputform = document.querySelector("#inputbtn");
const form = document.querySelector("#inputform");
const idcheck = document.querySelector("#checkid");
const nickcheck = document.querySelector("#nickcheckbtn");

const uservalues = [...document.querySelectorAll("input")];
const uservalue = uservalues.reduce((acc, val, idx) => {
    acc[uservalues[idx].id] = val;
    return acc;
}, {});

const userspans = [...document.querySelectorAll("span")];
const userspan = userspans.reduce((acc, val, idx) => {
    acc[userspans[idx].className] = val;
    return acc;
}, {});

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

const findvalue = (val, span) => {
    if (val.value === "") {
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
        if (uservalue.userPw.value !== uservalue.userRpw.value) {
            userspan.rpwspan.innerHTML = `${reg.pwreg[2]}`;
        } else {
            userspan.rpwspan.innerHTML = "";
        }
    });
    uservalue.userRpw.addEventListener("input", () => {
        if (uservalue.userRpw.value !== uservalue.userPw.value) {
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
        } else if (val.value < 1900 || val.value > date.getFullYear() - 1) {
            span.innerHTML = "연도를 확인해주세요";
        } else {
            span.innerHTML = "";
        }
    });
};

const BirthddHandler = (val, span, reg, messege) => {
    val.addEventListener("input", () => {
        if (!reg.test(val.value)) {
            span.innerHTML = `${messege}`;
        } else if (val.value < 0 || val.value > 31) {
            span.innerHTML = "일자를 확인해주세요";
        } else {
            span.innerHTML = "";
        }
    });
};

checkHandler(uservalue.userId, userspan.idspan, reg.idreg[0], reg.idreg[1]);
checkHandler(uservalue.userNickname, userspan.usernickspan, reg.nickreg[0], reg.nickreg[1]);
pwcheckHandler();
inputHandler(uservalue.userName, userspan.usernamespan, reg.namereg[0], reg.namereg[1]);
BirthyyHandler(uservalue.userBirthyy, userspan.userBirthyyspan, reg.yyreg[0], reg.yyreg[1]);
BirthddHandler(uservalue.userBirthdd, userspan.userBirthddspan, reg.ddreg[0], reg.ddreg[1]);
inputHandler(uservalue.userPhone, userspan.userPhonespan, reg.phoneheadreg[0], reg.phoneheadreg[1]);
inputHandler(uservalue.userPhoneMiddle, userspan.userPhoneMiddlespan, reg.phonemidreg[0], reg.phonemidreg[1]);
inputHandler(uservalue.userPhoneLast, userspan.userPhoneLastspan, reg.phonemidreg[0], reg.phonemidreg[1]);
inputHandler(uservalue.userCall, userspan.userCallspan, reg.phoneheadreg[0], reg.phoneheadreg[1]);
inputHandler(uservalue.userCallMiddle, userspan.userCallMiddlespan, reg.phonemidreg[0], reg.phonemidreg[1]);
inputHandler(uservalue.userCallLast, userspan.userCallLastspan, reg.phonemidreg[0], reg.phonemidreg[1]);

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

const buttonHandler = (e) => {
    e.preventDefault();
    const phonelast = findvalue(uservalue.userPhoneLast, userspan.userPhoneLastspan);
    const phonemid = findvalue(uservalue.userPhoneMiddle, userspan.userPhoneMiddlespan);
    const phone = findvalue(uservalue.userPhone, userspan.userPhonespan);
    const birthdd = findvalue(uservalue.userBirthdd, userspan.userBirthddspan);
    const birthyy = findvalue(uservalue.userBirthyy, userspan.userBirthyyspan);
    const name = findvalue(uservalue.userName, userspan.usernamespan);
    const pwRpw = findvalue(uservalue.userRpw, userspan.rpwspan);
    const pw = findvalue(uservalue.userPw, userspan.pwspan);

    if (userspan.usernickspan.innerHTML !== "생성이 가능합니다.") {
        alert("닉네임양식 확인과 중복체크를 완료해주세요");
    } else if (phone && phonemid && phonelast && birthdd && birthyy && name && pwRpw && pw) {
        form.submit();
    } else {
        alert("필수정보를 입력해주세요");
    }
};

nickcheck.addEventListener("click", nickcheckHandler);
idcheck.addEventListener("click", idcheckHandler);
form.addEventListener("submit", formHandler);
inputform.addEventListener("click", buttonHandler);

