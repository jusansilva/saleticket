const { Router } = require("express");
const { getUser, createManager } = require("../services/user-services");
const UserRouter = Router();
const middlewareValidarJWT = require("../midleware/auth-middleware");

UserRouter.get("/user", middlewareValidarJWT,  async (req, res) => {
  await getUser(req, res);
});

UserRouter.post("/manager", middlewareValidarJWT, async (req, res) => {
  await createManager(req, res);
})

module.exports = UserRouter;
