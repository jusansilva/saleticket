const { Router } = require("express");

const HealthRouter = Router();

HealthRouter.get("/", (req, res) => {
  res.json("I'm Alive");
});

module.exports = HealthRouter;