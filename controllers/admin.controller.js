const service = require("../services/admin.service");

exports.postLogin = async (req, res) => {
  const { userId, userPw } = req.body;
  const result = await service.loginData({ userId, userPw });
  if (result === undefined) return res.send("<script>alert('잘못된 접근입니다.');history.back()</script>");
  res.setHeader("Set-cookie", `id=${result.id}; Path=/;`);
  res.redirect("/admin/userList");
};

exports.getUser = async (req, res) => {
  const result = await service.bringUser();

  res.render("admin/user_list.html", { result });
};

exports.getEditUser = async (req, res) => {
  const { id } = req.query;
  const result = await service.getEditUser(id);
  res.render("admin/user_edit.html", { result });
};
