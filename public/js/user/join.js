const inputli = document.querySelectorAll("#inputBox > li");
const inputform = document.querySelector("#inputform");

const idvalue = document.querySelector("#userId");
const pwvalue = document.querySelector("#userPw");
const namevalue = document.querySelector("#userName");
const pwRpw = document.querySelector("#userRpw");
const nickvalue = document.querySelector("#userNickname");

const idspan = document.querySelector(".userId > span");
const pwspan = document.querySelector(".userPw > span");
const rpwspan = document.querySelector(".userRpw > span");
const nickspan = document.querySelector(".userNick > span");
const namespan = document.querySelector(".userName > span");

const creatspan = () => {
    if (idvalue.value === "") {
        idspan.innerHTML = "값이 없습니다.";
    } else {
        idspan.innerHTML = "";
    }
    if (pwvalue.value === "") {
        pwspan.innerHTML = "값이 없습니다.";
    } else {
        pwspan.innerHTML = "";
    }
    if (namevalue.value === "") {
        namespan.innerHTML = "값이 없습니다.";
    } else {
        namespan.innerHTML = "";
    }
    if (nickvalue.value === "") {
        nickspan.innerHTML = "값이 없습니다.";
    } else {
        nickspan.innerHTML = "";
    }
    if (pwRpw.value === "") {
        rpwspan.innerHTML = "값이 없습니다.";
    } else {
        rpwspan.innerHTML = "";
    }
};

const formHandler = (e) => {
    e.preventDefault();
    creatspan();
};

inputform.addEventListener("submit", formHandler);

