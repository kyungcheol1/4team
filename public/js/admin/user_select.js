const userLevelCheck = document.querySelector("#userLevelCheck");
const userLevel = document.querySelectorAll("#user_level > option");
const isUseCheck = document.querySelector("#isUseCheck");
const isUse = document.querySelectorAll("#is_use > option");
const userBirthmmCheck = document.querySelector("#userBirthmmCheck");
const userBirthmm = document.querySelectorAll("#userBirthmm > option");
const userGenderCheck = document.querySelector("#userGenderCheck");
const userGender = document.querySelectorAll("#userGender > option");

const optionSelect = (standard, selectVal) => {
  for (i = 0; i < selectVal.length; i++) {
    if (standard.value === selectVal[i].value) {
      selectVal[i].setAttribute("selected", "selected");
    }
  }
};

optionSelect(userLevelCheck, userLevel);
optionSelect(isUseCheck, isUse);
optionSelect(userBirthmmCheck, userBirthmm);
optionSelect(userGenderCheck, userGender);
