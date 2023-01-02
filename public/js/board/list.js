const totalboards = document.querySelector("#totalboards");
const prebtn = document.querySelector("#pre");
const next = document.querySelector("#next");
const query = window.location.search;
const atag = document.querySelectorAll("#paging > ul > li > a");
const pagenumber = query.split("=")[1];

for (let i = 1; i < atag.length; i++) {
    if (pagenumber === atag[i].innerHTML) {
        atag[i].style.fontWeight = "bold";
    }
}

const totalboard = totalboards.innerHTML.split(":")[1];

const viewlist = 10;
const viewpagebtn = 5;
const totalpage = Math.ceil(totalboard / viewlist);

const clicklimit = Math.ceil(totalpage / viewpagebtn);
let count = Math.ceil(pagenumber / viewpagebtn);

let pagearr = [];

prebtn.addEventListener("click", async (e) => {
    --count;
    if (count === 0) {
        e.preventDefault();
        alert("맨앞페이지 입니다.");
        return (count = 1);
    } else {
        window.location.href = `http://localhost:3000/board/list?pageNum=${1 + 5 * (count - 1)}`;
    }
});

next.addEventListener("click", async (e) => {
    ++count;
    if (count > clicklimit) {
        e.preventDefault();
        alert("맨뒷페이지 입니다.");
        return (count = clicklimit);
    } else {
        window.location.href = `http://localhost:3000/board/list?pageNum=${1 + 5 * (count - 1)}`;
    }
});

