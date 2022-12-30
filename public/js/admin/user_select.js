const userLevelCheck = document.querySelector("#userLevelCheck");
const userLevel = document.querySelectorAll("#user_level > option");
const userisUseCheck = document.querySelector("#isUseCheck");
const userisUse = document.querySelectorAll("#is_use > option");
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
optionSelect(userisUseCheck, userisUse);
optionSelect(userBirthmmCheck, userBirthmm);
optionSelect(userGenderCheck, userGender);
