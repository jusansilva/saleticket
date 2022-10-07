const { Router } = require("express");

const HealthRouter = Router();

HealthRouter.get("/", (req, res) => {
  res.redirect("/login")
  res.json("I'm Alive");
});

module.exports = HealthRouter;