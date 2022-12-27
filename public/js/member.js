// class="member_task"
const contentBox = document.querySelector("#content_box");
const members = document.querySelectorAll(".member");

const member_task = (e) => {
  console.log(e.target);
};

members.addEventListener("click", memberTaskBox);
