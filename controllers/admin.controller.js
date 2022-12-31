const service = require("../services/admin.service");

exports.postLogin = async (req, res) => {
  const { userId, userPw } = req.body;
  const result = await service.loginData({ userId, userPw });
  if (result === undefined) return res.send("<script>alert('잘못된 접근입니다.');history.back()</script>");
  res.setHeader("Set-cookie", `id=${result.id}; Path=/;`);
  res.redirect("/admin/userList");
};

exports.getUser = async (req, res) => {
  const cookie = req.cookies.id;
  const result = await service.bringUser({ cookie });
  if (result === undefined) return res.send("<script>alert('잘못된 접근입니다.');location.href=`/admin`</script>");
  res.render("admin/user_list.html", { result, cookie });
};

exports.getEditUser = async (req, res) => {
  const { id } = req.query;
  if (id === undefined) return res.send("<script>alert('잘못된 접근입니다.');location.href=`/admin`</script>");
  const cookie = req.cookies.id;
  const result = await service.getEditUser({ id, cookie });
  if (result === undefined) return res.send("<script>alert('잘못된 접근입니다.');location.href=`/admin`</script>");
  res.render("admin/user_edit.html", { result });
};

exports.postEditUser = async (req, res) => {
  const cookie = req.cookies.id;
  const id = req.query.id;
  const userData = req.body;
  const result = await service.postEditUSer({ userData, cookie, id });
  if (result === undefined) return res.send("<script>alert('잘못된 접근입니다.');location.href=`/admin`</script>");
  res.redirect("/admin/userList");
};

exports.getBoardList = async (req, res) => {
  const cookie = req.cookies.id;
  const result = await service.bringBoard({ cookie });
  if (result === undefined) return res.send("<script>alert('잘못된 접근입니다.);location.href=`/admin`</script>");
  res.render("admin/board_list.html", { result, cookie });
};

exports.deleteData = async (req, res) => {
  const cookie = req.cookies.id;
  const query = req.query;
  const [[key, value]] = Object.entries(query);
  let table = "";
  table = key === "id" ? "user" : "board";
  const data = { table, key, value };
  const result = await service.deleteData({ cookie, data });
  if (result === undefined) return res.send("<script>alert('잘못된 접근입니다.);location.href=`/admin`</script>");

  res.redirect(`/admin/${table}List`);
};
