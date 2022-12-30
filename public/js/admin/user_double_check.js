const checkId = document.querySelector("#id");
const checkNickName = document.querySelector("#nickName");
const modifyBtn = document.querySelector("#modifyBtn");

const level = document.querySelector("#user_level");
const isUse = document.querySelector("#is_use");
const input = [...document.querySelectorAll('input:not([type="hidden"])')];
input.splice(1, 2);
input.splice(8, 3);

const [id, name, nickName, birthyy, birthdd, phone, phoneMiddle, phoneLast] = input;
const birthmm = document.querySelector("#userBirthmm");
const gender = document.querySelector("#userGender");

const span = document.querySelectorAll("span");
const [idSpan, pwSpan, rpwSpan, nameSpan, nickNameSpan, birthyySpan, birthddSpan, phoneSpan, phoneMiddleSpan, phoneLastSpan, callSpan, callMiddleSpan, callLastSpan] = span;
const spanObj = { idSpan, pwSpan, rpwSpan, nameSpan, nickNameSpan, birthyySpan, birthddSpan, phoneSpan, phoneMiddleSpan, phoneLastSpan, callSpan, callMiddleSpan, callLastSpan };

const state = {
  userId: true,
  userPw: true,
  userRpw: true,
  userName: true,
  userNickName: true,
  userBirthyy: true,
  userBirthdd: true,
  userPhone: true,
  userPhoneMiddle: true,
  userPhoneLast: true,
  userCall: true,
  userCallMiddle: true,
  userCallLast: true,
};

const duplicateCheck = (e) => {
  const idORNickName = { id: "아이디", nickName: "닉네임" };
  e.preventDefault();
  const button = e.target;
  const input = e.target.previousElementSibling;
  const span = e.target.nextElementSibling;
  const data = {};
  data[button.id] = input.value;
  if (span.innerHTML !== "중복체크를 해주세요" && span.innerHTML !== "생성이 가능합니다.") {
    alert(`올바른 ${idORNickName[button.id]} 형식이 아닙니다.`);
    state[button.id] = false;
  } else {
    const result = checking(data);

    result.then((res) => {
      if (!res) {
        input.focus();
        span.style.color = "red";
        span.innerHTML = `중복 ${idORNickName[button.id]} 입니다.`;
        state[button.id] = false;
      } else {
        span.style.color = "green";
        span.innerHTML = "생성이 가능합니다.";
        state[button.id] = true;
      }
    });
  }
};

const checking = async (data) => {
  const respone = await fetch("http://localhost:3000/user/join/idcheck", {
    method: "POST",
    headers: {
      Accpet: "application/json",
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
  const result = await respone.json();
  return result.check;
};

checkId.addEventListener("click", duplicateCheck);
checkNickName.addEventListener("click", duplicateCheck);

const orginValue = {
  id: id.value,
  userName: userName.value,
  nickName: nickName.value,
  birthyy: birthyy.value,
  birthdd: birthdd.value,
  phone: phone.value,
  phoneMiddle: phoneMiddle.value,
  phoneLast: phoneLast.value,
};

const reg = {
  id: [/^[a-zA-Z0-9]{4,12}$/, `**ID는 4~12자의 영문 대소문자와 숫자로만 입력하여 주세요.`],
  pw: [/^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{5,}$/, `**5글자 이상 소문자,숫자를 포함해주세요.`],
  rpw: [/^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{5,}$/, `**5글자 이상 소문자,숫자를 포함해주세요.`],
  userName: [/^[a-zA-Z가-힣]{1,25}$/, `**이름은 최대 25자 영문 한글로만 입력이 가능합니다.`],
  nickName: [/^[a-zA-Z0-9가-힣]{2,25}$/, `**닉네임는 2~25자의 영문 대소문자와 숫자, 한글로만 입력하여 주세요.`],
  userBirthyy: [/^[0-9]{4,4}$/, `**연도는 4글자로 입력 해주세요.`],
  userBirthdd: [/^[0-9]{2,2}$/, `*일자는 2글자로 입력 해주세요.`],
  userPhone: [/^[0-9]{3,3}$/, `**3글자숫자로 입력 가능합니다.`],
  userPhoneMiddle: [/^[0-9]{3,4}$/, `**3,4글자숫자로 입력 해주세요.`],
  userPhoneLast: [/^[0-9]{3,4}$/, `**3,4글자숫자로 입력 해주세요.`],
  userCall: [/^[0-9]{3,3}$/, `**3글자숫자로 입력 가능합니다.`],
  userCallMiddle: [/^[0-9]{3,4}$/, `**3,4글자숫자로 입력 해주세요.`],
  userCallLast: [/^[0-9]{3,4}$/, `**3,4글자숫자로 입력 해주세요.`],
};

const message = {
  blank: `**값을 입력해 주세요.`,
  duplicate: `중복체크를 해주세요`,
  idEngNum: `**ID는 4~12자의 영문 대소문자와 숫자로만 입력하여 주세요.`,
  pwLenght: `**5글자 이상 소문자,숫자를 포함해주세요.`,
  difPw: `**비밀번호 값이 다릅니다".`,
  nameRule: `**이름은 최대 25자 영문 한글로만 입력이 가능합니다.`,
  nickNameRule: `**닉네임는 2~25자의 영문 대소문자와 숫자, 한글로만 입력하여 주세요.`,
  yearLenght: `**연도는 4글자숫자로 입력 가능합니다.`,
  yerrCheck: `**연도를 확인해주세요.`,
  dayMax: `*일자는 2글자숫자로 입력 해주세요. ex)1일 -> 01`,
  phoneF: `**3글자숫자로 입력 가능합니다.`,
  phoneML: `**3,4글자숫자로 입력 해주세요.`,
};

const checkInput = (e) => {
  const t = e.target;
  const name = t.name;
  const value = t.value;
  const span = t.dataset.span;

  if (value === "") {
    spanObj[span].style.color = "red";
    spanObj[span].innerHTML = message.blank;
    state[t.id] = false;
  } else if (!reg[name][0].test(value)) {
    spanObj[span].style.color = "red";
    spanObj[span].innerHTML = reg[name][1];
    state[t.id] = false;
  } else {
    spanObj[span].innerHTML = "";
    state[t.id] = true;
  }
};

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("input", checkInput);
}

const [pw, rpw] = document.querySelectorAll(".pw");

const pwCheck = (e) => {
  if (pw.value === "" && rpw.value === "") {
    spanObj["rpwSpan"].innerHTML = "";
    state[e.target.id] = true;
  } else if (e.target.value.length < 5) {
    spanObj["rpwSpan"].style.color = "red";
    spanObj["rpwSpan"].innerHTML = message.pwLenght;
    state[e.target.id] = false;
  } else if (pw.value !== rpw.value) {
    spanObj["rpwSpan"].style.color = "red";
    spanObj["rpwSpan"].innerHTML = message.difPw;
    state[e.target.id] = false;
  } else {
    spanObj["rpwSpan"].innerHTML = "";
    state[e.target.id] = true;
  }
};

pw.addEventListener("input", pwCheck);
rpw.addEventListener("input", pwCheck);

const changeCheck = (e) => {
  const t = e.target;
  const name = t.name;
  const value = t.value;
  const span = t.dataset.span;

  if (value !== orginValue[name]) {
    spanObj[span].style.color = "red";
    spanObj[span].innerHTML = message.duplicate;
    state[t.id] = false;
  } else {
    spanObj[span].innerHTML = "";
    state[t.id] = true;
  }
};

id.addEventListener("change", changeCheck);
nickName.addEventListener("change", changeCheck);

const callList = document.querySelectorAll(".call");

const callInput = (e) => {
  const t = e.target;
  const name = t.name;
  const value = t.value;
  const span = t.dataset.span;

  if (value === "") {
    spanObj[span].innerHTML = "";
    state[t.id] = true;
  } else if (!reg[name][0].test(value)) {
    spanObj[span].style.color = "red";
    spanObj[span].innerHTML = reg[name][1];
    state[t.id] = false;
  } else {
    spanObj[span].innerHTML = "";
    state[t.id] = true;
  }
};

for (let i = 0; i < callList.length; i++) {
  callList[i].addEventListener("input", callInput);
}
const inputStateList = [document.querySelectorAll('input:not([type="hidden"])')];

const form = document.querySelector("form");

const modify = (e) => {
  e.preventDefault();
  let loc = Object.values(state).indexOf(false);
  if (loc < 0) form.submit();
  inputStateList[loc].focus();
};
modifyBtn.addEventListener("click", modify);
