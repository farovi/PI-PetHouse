var express = require("express");
var router = express.Router();
const validation = require("../middlewares/validateRegisterMiddleware");
const clienteController = require("../controllers/clienteController");

router.get("/", (req, res) => {
  res.render("pages/home");
});
router.get("/checkout", (req, res) => {
  res.render("pages/checkout");
});

router.get("/meuCarrinho", (req, res) => {
  res.render("pages/meuCarrinho");
});
router.get("/produtoInterna", (req, res) => {
  res.render("pages/produtoInterna");
});
router.get("/minhaConta", (req, res) => {
  res.render("pages/minhaConta");
});
router.get("/finalizado", (req, res) => {
  res.render("pages/pedidoFinalizado");
});
router.get("/login", validation, clienteController.index);

router.get("/admin", (req, res) => {
  res.render("admin/produtosCadastrar");
});

module.exports = router;
