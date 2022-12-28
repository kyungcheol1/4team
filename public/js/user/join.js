const inputli = document.querySelectorAll("#inputBox > li");
const inputform = document.querySelector("#inputbtn");
const form = document.querySelector("#inputform");
const idcheck = document.querySelector("#checkid");

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

const findvalue = (val, span) => {
    if (val.value === "") {
        val.focus();
        span.innerHTML = `**필수 입력 정보입니다.`;
        return false;
    } else {
        span.innerHTML = "";
        return true;
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

const blurcheck = () => {
    blurEvent(userPhone, phonespan);
    blurEvent(userPhoneMiddle, phonespan);
    blurEvent(userPhoneLast, phonespan);
    blurEvent(userBirthdd, userBirthspan);
    blurEvent(userBirthmm, userBirthspan);
    blurEvent(userBirthyy, userBirthspan);
    blurEvent(nickvalue, nickspan);
    blurEvent(namevalue, namespan);
    blurEvent(pwRpwvalue, pwRpwspan);
    blurEvent(pwvalue, pwspan);
    blurEvent(idvalue, idspan);
};

blurcheck();

const idcheckHandler = async () => {
    let userid = idvalue.value;
    let id = {
        userid: userid,
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

    if (!check) {
        idspan.innerHTML = "멘탈이 깨집니다.";
    } else {
        idspan.innerHTML = "생성이 가능합니다.";
    }

    // if (response.ok) {
    //     // HTTP 상태 코드가 200~299일 경우
    //     // 응답 몬문을 받습니다(관련 메서드는 아래에서 설명).
    //     let json = await response.json();
    // } else {
    //     alert("HTTP-Error: " + response.status);
    // }
    // console.log(userid);
    // let response = await fetch("http://localhost:3000/user/join/idcheck", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //     },
    //     body: toString(userid),
    // });
    // const re = response.then((respon) => respon.text());
    // console.log(re);

    // const rkk = response;
    // console.log(rkk);
};

const formHandler = (e) => {
    e.preventDefault();
    const a1 = findvalue(userPhone, phonespan);
    const b1 = findvalue(userPhoneMiddle, phonespan);
    const c1 = findvalue(userPhoneLast, phonespan);
    const d1 = findvalue(userBirthdd, userBirthspan);
    const e1 = findvalue(userBirthmm, userBirthspan);
    const f1 = findvalue(userBirthyy, userBirthspan);
    const g1 = findvalue(nickvalue, nickspan);
    const h1 = findvalue(namevalue, namespan);
    const i1 = findvalue(pwRpwvalue, pwRpwspan);
    const j1 = findvalue(pwvalue, pwspan);
    const k1 = findvalue(idvalue, idspan);

    if (a1 && b1 && c1 && d1 && e1 && f1 && g1 && h1 && i1 && j1 && k1) form.submit();
};

idcheck.addEventListener("click", idcheckHandler);
form.addEventListener("submit", formHandler);

