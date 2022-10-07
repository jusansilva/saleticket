const Manager = require("../db/model/ManagerModels");

module.exports.getUser = (req, res) => {
  res.json(req.userInfo);
};

module.exports.createManager = async (req, res) => {
  Manager.create(req.body).then(function(manager){
    res.send(manager);
  })
}
