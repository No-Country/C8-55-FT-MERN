const exampleService = require("../services/example.service");

const exampleController = (req, res) => {
  res.send(exampleService.getExample());
};

module.exports = exampleController;
