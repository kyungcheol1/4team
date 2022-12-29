const inputli = document.querySelectorAll("#inputBox > li");
const inputform = document.querySelector("#inputbtn");
const form = document.querySelector("#inputform");
const idcheck = document.querySelector("#checkid");
const nickcheck = document.querySelector("#nickcheckbtn");

const liAll = document.querySelectorAll(".inputli");
const idvalue = document.querySelector("#userId");
const pwvalue = document.querySelector("#userPw");
const namevalue = document.querySelector("#userName");
const pwRpwvalue = document.querySelector("#userRpw");
const nickvalue = document.querySelector("#userNickname");
const userBirthyy = document.querySelector("#userBirthyy");
const userBirthmm = document.querySelector("#userBirthmm");
const userBirthdd = document.querySelector("#userBirthdd");
const userPhone = document.querySelector("#userPhone");
const userPhoneMiddle = document.querySelector("#userPhoneMiddle");
const userPhoneLast = document.querySelector("#userPhoneLast");

const idspan = document.querySelector(".userId > span");
const pwspan = document.querySelector(".userPw > span");
const pwRpwspan = document.querySelector(".userRpw > span");
const nickspan = document.querySelector(".userNick > span");
const namespan = document.querySelector(".userName > span");
const userBirthspan = document.querySelector("#userBirth > span");
const phonespan = document.querySelector(".phone > span");

const date = new Date();

const findvalue = (val, span) => {
    if (val.value === "") {
        val.focus();
        span.innerHTML = `**필수 입력 정보입니다.`;
        return false;
    } else if (span.innerHTML === "") {
        return true;
    } else {
        val.focus();
    }
};

const blurEvent = (val, span) => {
    val.addEventListener("blur", () => {
        if (val.value === "") {
            span.innerHTML = `**값을 입력해 주세요.`;
            return false;
        } else {
            span.innerHTML = "";
            return true;
        }
    });
};

const idblurEvent = () => {
    const reg = /^[a-zA-Z0-9]{4,12}$/;
    idvalue.addEventListener("blur", (e) => {
        // if (idspan.innerHTML === "생성이 가능합니다.") {
        //     e.preventDefault();
        // } else
        if (idvalue.value === "") {
            idspan.style.color = "red";
            idspan.innerHTML = `**값을 입력해 주세요.`;
            return false;
        } else if (!reg.test(idvalue.value)) {
            idvalue.focus();
            idspan.style.color = "red";
            idspan.innerHTML = "**ID는 4~12자의 영문 대소문자와 숫자로만 입력하여 주세요.";
            return false;
        } else {
            idspan.style.color = "red";
            idspan.innerHTML = "중복체크를 해주세요";
            return true;
        }
    });
};

const pwblurEvent = () => {
    const reg = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{5,}$/;
    pwvalue.addEventListener("blur", () => {
        if (pwvalue.value === "") {
            pwspan.innerHTML = `**값을 입력해 주세요.`;
            return false;
        } else if (!reg.test(pwvalue.value)) {
            pwspan.innerHTML = "**5글자 이상 소문자,숫자를 포함해주세요";
            return false;
        } else {
            pwspan.innerHTML = "";
            return true;
        }
    });
};

const rpwblurEvent = (val, span) => {
    val.addEventListener("blur", () => {
        if (val.value === "") {
            span.innerHTML = `**값을 입력해 주세요.`;
            return false;
        } else if (val.value !== pwvalue.value) {
            span.innerHTML = "**비밀번호 값이 다릅니다";
            return false;
        } else if (val.value === pwvalue.value) {
            span.innerHTML = "";
            return true;
        }
    });
};

const nameblurEvent = () => {
    const reg = /^[a-zA-Z가-힣]{1,25}$/;
    namevalue.addEventListener("blur", () => {
        if (namevalue.value === "") {
            namespan.innerHTML = `**값을 입력해 주세요.`;
            return false;
        } else if (!reg.test(namevalue.value)) {
            namespan.innerHTML = "**이름은 최대 25자 영문 한글로만 입력이 가능합니다";
            return false;
        } else {
            namespan.innerHTML = "";
            return true;
        }
    });
};

const nickblurEvent = () => {
    const reg = /^[a-zA-Z0-9가-힣]{2,25}$/;
    nickvalue.addEventListener("blur", () => {
        if (nickvalue.value === "") {
            nickspan.innerHTML = `**값을 입력해 주세요.`;
            return false;
        } else if (!reg.test(nickvalue.value)) {
            nickspan.style.color = "red";
            nickspan.innerHTML = "**닉네임는 2~25자의 영문 대소문자와 숫자, 한글로만 입력하여 주세요.";
            return false;
        } else {
            nickspan.style.color = "red";
            nickspan.innerHTML = "중복체크를 해주세요";
            return true;
        }
    });
};

const birthblurEvent = () => {
    const yyreg = /^[0-9]{4,4}$/;
    const ddreg = /^[0-9]{2,2}$/;
    userBirthyy.addEventListener("blur", () => {
        if (userBirthyy.value === "") {
            userBirthspan.innerHTML = `**값을 입력해 주세요.`;
            return false;
        } else if (!yyreg.test(userBirthyy.value)) {
            userBirthspan.innerHTML = "**연도는 4글자숫자로 입력 가능합니다";
            return false;
        } else if (userBirthyy.value < 1900 || userBirthyy.value > date.getFullYear()) {
            userBirthspan.innerHTML = "**연도를 확인해주세요";
        } else {
            userBirthspan.innerHTML = "";
            return true;
        }
    });
    userBirthdd.addEventListener("blur", () => {
        if (userBirthdd.value === "") {
            userBirthspan.innerHTML = `**값을 입력해 주세요.`;
            return false;
        } else if (!ddreg.test(userBirthdd.value)) {
            userBirthspan.innerHTML = "**일자는 2글자숫자로 입력 해주세요 ex)1일 -> 01";
            return false;
        } else {
            userBirthspan.innerHTML = "";
            return true;
        }
    });
};

const phoneblurEvent = () => {
    const phonereg = /^[0-9]{3,3}$/;
    const phonemidreg = /^[0-9]{3,4}$/;
    userPhone.addEventListener("blur", () => {
        if (userPhone.value === "") {
            phonespan.innerHTML = `**값을 입력해 주세요.`;
            return false;
        } else if (!phonereg.test(userPhone.value)) {
            phonespan.innerHTML = "**3글자숫자로 입력 가능합니다";
            return false;
        } else {
            phonespan.innerHTML = "";
            return true;
        }
    });
    userPhoneMiddle.addEventListener("blur", () => {
        if (userPhoneMiddle.value === "") {
            phonespan.innerHTML = `**값을 입력해 주세요.`;
            return false;
        } else if (!phonemidreg.test(userPhoneMiddle.value)) {
            phonespan.innerHTML = "**3,4글자숫자로 입력 해주세요.";
            return false;
        } else {
            phonespan.innerHTML = "";
            return true;
        }
    });
    userPhoneLast.addEventListener("blur", () => {
        if (userPhoneLast.value === "") {
            phonespan.innerHTML = `**값을 입력해 주세요.`;
            return false;
        } else if (!phonemidreg.test(userPhoneLast.value)) {
            phonespan.innerHTML = "**3,4글자숫자로 입력 해주세요.";
            return false;
        } else {
            phonespan.innerHTML = "";
            return true;
        }
    });
};

const blurcheck = () => {
    pwblurEvent();
    idblurEvent();
    rpwblurEvent(pwRpwvalue, pwRpwspan);
    nameblurEvent();
    nickblurEvent();
    birthblurEvent();
    phoneblurEvent();
};

blurcheck();

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
        id: idvalue.value,
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

    if (idspan.innerHTML !== "중복체크를 해주세요" && idspan.innerHTML !== "생성이 가능합니다.") {
        alert("올바른 아이디 형식이 아닙니다.");
    } else {
        printcheck(check, idvalue, idspan);
    }
};

const nickcheckHandler = async (e) => {
    e.preventDefault();
    let nick = {
        nickName: nickvalue.value,
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

    if (nickspan.innerHTML !== "중복체크를 해주세요" && nickspan.innerHTML !== "생성이 가능합니다.") {
        alert("올바른 아이디 형식이 아닙니다.");
    } else {
        printcheck(check, nickvalue, nickspan);
    }
};

const formHandler = (e) => {
    e.preventDefault();
};

const buttonHandler = (e) => {
    e.preventDefault();
    const phonelast = findvalue(userPhoneLast, phonespan);
    const phonemid = findvalue(userPhoneMiddle, phonespan);
    const birthdd = findvalue(userBirthdd, userBirthspan);
    const birthmm = findvalue(userBirthmm, userBirthspan);
    const birthyy = findvalue(userBirthyy, userBirthspan);
    const nick = findvalue(nickvalue, nickspan);
    const name = findvalue(namevalue, namespan);
    const pwRpw = findvalue(pwRpwvalue, pwRpwspan);
    const pw = findvalue(pwvalue, pwspan);

    if (idspan.innerHTML !== "생성이 가능합니다.") {
        alert("아이디양식 확인과 중복체크를 완료해주세요");
        idvalue.focus();
    } else if (nickspan.innerHTML !== "생성이 가능합니다.") {
        alert("닉네임양식 확인과 중복체크를 완료해주세요");
        nickvalue.focus();
    } else if (phonemid && phonelast && birthdd && birthmm && birthyy && nick && name && pwRpw && pw) form.submit();
};

nickcheck.addEventListener("click", nickcheckHandler);
idcheck.addEventListener("click", idcheckHandler);
form.addEventListener("submit", formHandler);
inputform.addEventListener("click", buttonHandler);

