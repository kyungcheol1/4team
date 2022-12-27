const inputli = document.querySelectorAll("#inputBox > li");
const inputform = document.querySelector("#inputform");

const idvalue = document.querySelector("#userId");
const pwvalue = document.querySelector("#userPw");
const namevalue = document.querySelector("#userName");
const pwRpw = document.querySelector("#userRpw");
const nickvalue = document.querySelector("#userNickname");
const liAll = document.querySelectorAll("");

const idspan = document.querySelector(".userId > span");
const pwspan = document.querySelector(".userPw > span");
const rpwspan = document.querySelector(".userRpw > span");
const nickspan = document.querySelector(".userNick > span");
const namespan = document.querySelector(".userName > span");

const creatspan = () => {
    if (idvalue.value === "") {
        idspan.innerHTML = "**아이디를 입력해주세요";
    } else {
        idspan.innerHTML = "";
    }
    if (pwvalue.value === "") {
        pwspan.innerHTML = "**비밀번호 입력해주세요";
    } else {
        pwspan.innerHTML = "";
    }
    if (pwRpw.value === "") {
        rpwspan.innerHTML = "**비밀번호 확인해주세요";
    } else if (pwvalue.value !== pwRpw.value) {
        rpwspan.innerHTML = "**비밀번호가 다릅니다";
    } else {
        rpwspan.innerHTML = "";
    }
    if (namevalue.value === "") {
        namespan.innerHTML = "**이름 입력해주세요";
    } else {
        namespan.innerHTML = "";
    }
    if (nickvalue.value === "") {
        nickspan.innerHTML = "**닉네임을 입력해주세요";
    } else {
        nickspan.innerHTML = "";
    }
};

const formHandler = (e) => {
    e.preventDefault();
    creatspan();
};

inputform.addEventListener("submit", formHandler);

