const members = document.querySelectorAll(".member");
const meberTaskBox = document.querySelector(".member_task_box");
const exit = document.querySelector(".exit");
const tasks = document.querySelector(".tasks");
const detail = document.querySelector(".detail");
const github = document.querySelector(".github");

const resData = (data) => {
  return fetch("http://localhost:3000/admin/memberTask", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((result) => result);
};

const membersBtn = (i) => {
  return async (e) => {
    const data = { member: i };
    const result = await resData(data);
    meberTaskBox.classList.add("active");
    tasks.innerHTML = `<b>Tasks</b> : ${result.tasks}`;
    detail.innerHTML = `<b>Detail</b> : ${result.detail}`;
    github.innerHTML = `<b>Github</b> : <a href=${result.github} target='_blank'>${result.github}</a>`;
  };
};

for (let i = 0; i < members.length; i++) {
  members[i].addEventListener("click", membersBtn(i));
}

const deleteActive = () => {
  meberTaskBox.classList.remove("active");
};

exit.addEventListener("click", deleteActive);
