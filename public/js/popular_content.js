const popularBox = document.querySelector("#popular_box");

const getContents = () => {
  return fetch("http://localhost:3000/admin/popularContent", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ content: "content" }),
  })
    .then((res) => res.json())
    .then((result) => result);
};

const contents = async () => {
  const datas = await getContents();
  for (i = 0; i < datas.length; i++) {
    popularBox.innerHTML += template(datas[i]);
  }
};

contents();

const template = ({ idx, title, writer, registerDate, hit }) => {
  return `
  <div class="pupular_contents">
  <div id="title"><a href="/board/view?index=${idx}">${title}</a></div>
  <div id="writer">${writer}</div>
  <div id="date">${registerDate}</div>
  <div id="views">조회수 ${hit}</div>
</div>
    `;
};
