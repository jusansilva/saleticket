const middlewareValidarJWT = (req, res, next) => {
  const jwt = req.headers["authorization"];
  const chavePrivada = "sandevcode";
  console.log(jwt)
  if (!jwt) {
    res.redirect("/login");
    return 
  }
  // Efetuando a validação do JWT:
  const jwtService = require("jsonwebtoken");
  jwtService.verify(jwt, chavePrivada, (err, userInfo) => {
    if (err) {
      res.redirect("/login");
      return;
    }
    req.userInfo = userInfo;
    next();
  });
};

module.exports = middlewareValidarJWT;
