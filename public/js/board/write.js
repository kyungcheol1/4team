// const title = document.querySelector("input");
// const content = document.querySelector("textarea");
const form = document.querySelector("#test");

const handler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
};

form.addEventListener("submit", handler);
