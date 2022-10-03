const { Router } = require("express");
const {login} = require("../services/auth-services");
const AuthRouter = Router();

AuthRouter.post("/login", async (req, res) => {
  await login(req, res)
});

module.exports = AuthRouter;