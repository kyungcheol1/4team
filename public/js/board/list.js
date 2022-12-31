const totalboards = document.querySelector("#totalboards");
const prebtn = document.querySelector("#pre");
const next = document.querySelector("#next");
const query = window.location.search;
// const pagenumber = query.split("=")[1];
// const totalboard = 114;

// const viewlist = 10;
// const viewpagebtn = 5;
// const totalpage = Math.ceil(totalboard / viewlist);

// let clicklimit = Math.floor(totalpage / viewpagebtn);

// let pagearr = [];

// for (let i = 0; i <= clicklimit; i++) {
//     pagearr.push([]);
//     for (let j = 1; j <= viewpagebtn; j++) {
//         pagearr[i].push(i * viewpagebtn + j);
//     }
// }
// let count = 0;
// prebtn.addEventListener("click", (e) => {
//     if (count === 0) {
//         e.preventDefault();
//         alert("맨앞페이지 입니다.");
//         return (count = 0);
//     }
//     --count;
//     console.log(pagearr[count]);
// });

// next.addEventListener("click", (e) => {
//     ++count;
//     if (count > clicklimit) {
//         e.preventDefault();
//         alert("맨뒷페이지 입니다.");
//         return (count = clicklimit);
//     }
//     console.log(pagearr[count]);
// });

