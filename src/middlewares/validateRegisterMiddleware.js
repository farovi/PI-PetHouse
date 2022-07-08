const { check } = require("express-validator");

module.exports = [
  check("nome_cliente").notEmpty().withMessage("Digite o nome").bail().trim(),
  check("email")
    .notEmpty()
    .withMessage("Digite o email")
    .bail()
    .trim()
    .bail()
    .normalizeEmail()
    .bail()
    .isEmail()
    .withMessage("Digite um formato de email correto"),
  check("senha")
    .notEmpty()
    .withMessage("Digite a senha")
    .bail()
    .isLength({ min: 6 })
    .withMessage("A senha precisa ter 6 caracteres pelo menos")
    .bail()
    .trim(),
];
