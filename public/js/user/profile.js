const deletea = document.querySelector(".deletea");

const deleteHandler = (e) => {
    e.preventDefault();
    if (confirm("탈퇴 하시겠습니까?")) {
        location.href = "/user/delete";
    } else {
        return;
    }
};

deletea.addEventListener("click", deleteHandler);

