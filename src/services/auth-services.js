var localStorage = require('store')
const Manager = require("../db/model/ManagerModels");


module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  const find = await Manager.findOne({email,senha:password}) 

  if (find) {
    const jwt = require("jsonwebtoken");
    const dadosUsuario = {
      nome: "marcos",
      email: "marcos@teste.com",
      id: 1,
    };

    const chavePrivada = "sandevcode";

    jwt.sign(dadosUsuario, chavePrivada, (err, token) => {
      if (err) {
        res.status(500).json({ mensagem: "Erro ao gerar o JWT" });

        return;
      }
      localStorage.set("token", token);

      res.set("authorization", token);
      res.set("x-access-token", token);
      res.redirect("/ticket");
    });
  } else {
    res.status(401);
    res.redirect("/login");
  }
};
