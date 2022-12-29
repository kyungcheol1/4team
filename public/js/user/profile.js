const deletea = document.querySelector(".deletea");
const birthvalue = document.querySelector("#userBirthmmname");
const birthselect = document.querySelectorAll("#userBirthmm > option");
const gendervalue = document.querySelector("#genderval");
const genderselect = document.querySelectorAll("#gender > option");

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

selects();

deletea.addEventListener("click", deleteHandler);

