module.exports.login = (req, res) => {
  const { usuario, password } = req.body;

  if (password === "maeventos") {
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

      res.set({"authorization": token});
      res.set("x-access-token", token);
      res.redirect("/home");
    });
  } else {
    res.status(401);
    res.redirect("/login");
  }
};
