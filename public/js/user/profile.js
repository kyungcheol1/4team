const deletea = document.querySelector(".deletea");
const birthvalue = document.querySelector("#userBirthmmname");
const birthselect = document.querySelectorAll("#userBirthmm > option");
const gendervalue = document.querySelector("#userGender");
const genderselect = document.querySelectorAll("#gender > option");

const inputform = document.querySelector("#inputbtn");
const form = document.querySelector("#inputform");
const nickcheck = document.querySelector("#nickcheckbtn");

const pwvalue = document.querySelector("#userPw");
const pwRpwvalue = document.querySelector("#userRpw");
const nickvalue = document.querySelector("#userNickname");
const befonicvalue = document.querySelector("#beforenick");
const userBirthyy = document.querySelector("#userBirthyy");
const userBirthmm = document.querySelector("#userBirthmm");
const userBirthdd = document.querySelector("#userBirthdd");
const userPhone = document.querySelector("#userPhone");
const userPhoneMiddle = document.querySelector("#userPhoneMiddle");
const userPhoneLast = document.querySelector("#userPhoneLast");

const pwspan = document.querySelector(".userPw > span");
const pwRpwspan = document.querySelector(".userRpw > span");
const nickspan = document.querySelector(".userNick > span");
const biryyspan = document.querySelector(".userBirthyy");
const birmmspan = document.querySelector(".userBirthmm");
const birddspan = document.querySelector(".userBirthdd");
const Callspan = document.querySelector(".userCall");
const Callmidspan = document.querySelector(".userCallMiddle");
const Calllastspan = document.querySelector(".userCallLast");

const date = new Date();

const selectval = (val, select) => {
    for (let i = 0; i < select.length; i++) {
        if (val.value === select[i].value) {
            select[i].setAttribute("selected", "selected");
        }
    }
};

const selects = () => {
    selectval(birthvalue, birthselect);
    selectval(gendervalue, genderselect);
};

const deleteHandler = (e) => {
    e.preventDefault();
    if (confirm("탈퇴 하시겠습니까?")) {
        location.href = "/user/delete";
    } else {
        return;
    }
};

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
            biryyspan.innerHTML = `**연도를 입력해 주세요.`;
        } else if (!yyreg.test(userBirthyy.value)) {
            biryyspan.innerHTML = "**연도는 4글자숫자로 입력 가능합니다";
        } else if (userBirthyy.value < 1900 || userBirthyy.value > date.getFullYear()) {
            biryyspan.innerHTML = "**연도를 확인해주세요";
        } else {
            biryyspan.innerHTML = "";
        }
    });
    userBirthdd.addEventListener("blur", () => {
        if (userBirthdd.value === "") {
            birddspan.innerHTML = `**날짜를 입력해 주세요.`;
            return false;
        } else if (!ddreg.test(userBirthdd.value)) {
            birddspan.innerHTML = "**일자는 2글자숫자로 입력 해주세요 ex)1일 -> 01";
            return false;
        } else {
            birddspan.innerHTML = "";
            return true;
        }
    });
};

const phoneblurEvent = () => {
    const phonereg = /^[0-9]{3,3}$/;
    const phonemidreg = /^[0-9]{3,4}$/;
    userPhone.addEventListener("blur", () => {
        if (userPhone.value === "") {
            Callspan.innerHTML = `**첫 값을 입력해 주세요.`;
            return false;
        } else if (!phonereg.test(userPhone.value)) {
            Callspan.innerHTML = "**3글자숫자로 입력 가능합니다";
            return false;
        } else {
            Callspan.innerHTML = "";
            return true;
        }
    });
    userPhoneMiddle.addEventListener("blur", () => {
        if (userPhoneMiddle.value === "") {
            Callmidspan.innerHTML = `**중간 값을 입력해 주세요.`;
            return false;
        } else if (!phonemidreg.test(userPhoneMiddle.value)) {
            Callmidspan.innerHTML = "**3,4글자숫자로 입력 해주세요.";
            return false;
        } else {
            Callmidspan.innerHTML = "";
            return true;
        }
    });
    userPhoneLast.addEventListener("blur", () => {
        if (userPhoneLast.value === "") {
            Calllastspan.innerHTML = `**마지막 값을 입력해 주세요.`;
            return false;
        } else if (!phonemidreg.test(userPhoneLast.value)) {
            Calllastspan.innerHTML = "**3,4글자숫자로 입력 해주세요.";
            return false;
        } else {
            Calllastspan.innerHTML = "";
            return true;
        }
    });
};

const blurcheck = () => {
    pwblurEvent();
    rpwblurEvent(pwRpwvalue, pwRpwspan);
    birthblurEvent();
    phoneblurEvent();
    nickblurEvent();
};

const printcheck = (check, val, span, befoval) => {
    if (befoval === val.value) {
        span.innerHTML = "변경 사항이 없습니다.";
    } else if (!check) {
        val.focus();
        span.style.color = "red";
        span.innerHTML = "중복된 닉네임 입니다.";
    } else {
        span.style.color = "green";
        span.innerHTML = "변경이 가능합니다.";
    }
};

const nickcheckHandler = async (e) => {
    e.preventDefault();
    const befonic = befonicvalue.value;
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
    console.log(nickvalue.value);

    if (nickspan.innerHTML !== "중복체크를 해주세요" && nickspan.innerHTML !== "변경이 가능합니다." && nickspan.innerHTML !== "변경 사항이 없습니다.") {
        alert("올바른 닉네임 형식이 아닙니다.");
    } else {
        printcheck(check, nickvalue, nickspan, befonic);
    }
};

const formHandler = (e) => {
    e.preventDefault();
};

const buttonHandler = (e) => {
    e.preventDefault();
    const phonelast = findvalue(userPhoneLast, Calllastspan);
    const phonemid = findvalue(userPhoneMiddle, Callmidspan);
    const phone = findvalue(userPhone, Callspan);
    const birthdd = findvalue(userBirthdd, birddspan);
    const birthmm = findvalue(userBirthmm, birmmspan);
    const birthyy = findvalue(userBirthyy, biryyspan);
    const pwRpw = findvalue(pwRpwvalue, pwRpwspan);
    const pw = findvalue(pwvalue, pwspan);

    if (nickspan.innerHTML !== "변경이 가능합니다." && nickspan.innerHTML !== "변경 사항이 없습니다.") {
        alert("닉네임양식 확인과 중복체크를 완료해주세요");
        nickvalue.focus();
    } else if (phone && phonemid && phonelast && birthdd && birthmm && birthyy && pwRpw && pw) form.submit();
};

blurcheck();
selects();

deletea.addEventListener("click", deleteHandler);
nickcheck.addEventListener("click", nickcheckHandler);
form.addEventListener("submit", formHandler);
inputform.addEventListener("click", buttonHandler);

