const { validationResult } = require("express-validator");
const User = require("../../models/Cliente");
const cadastroController = require("./cadastroController");

const loginconntroller = {
  index: (req, res) => {
    res.render("pages/login", { alert: true });
  },
  processRegister: (req, res) => {
    const resultValidations = validationResult(req);

    if (resultValidations.errors.length > 0) {
      return res.render("pages/login", {
        errors: resultValidations.mapped(),
        oldData: req.body,
      });
    }
    cadastroController.create(req.body);
    return res.send("pages/home");
  },
};

module.exports = loginconntroller;
// module.exports = createUser;
