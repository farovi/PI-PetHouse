const { validationResult } = require("express-validator");

const clienteController = {
  index: (req, res) => {
    res.render("pages/login");
  },
  processRegister: (req, res) => {
    const resultValidations = validationResult(req);

    if (resultValidations.errors.length > 0) {
      return res.render("pages/login", {
        errors: resultValidations.mapped(),
        oldData: req.body,
      });
    }
    return res.send("pages/home");
  },
};

module.exports = clienteController;
