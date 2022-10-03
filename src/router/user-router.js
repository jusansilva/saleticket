const { Router } = require("express");
const { getUser } = require("../services/user-services");
const UserRouter = Router();
const middlewareValidarJWT = require("../midleware/auth-middleware");

UserRouter.get("/user", middlewareValidarJWT,  async (req, res) => {
  await getUser(req, res);
});

module.exports = UserRouter;
