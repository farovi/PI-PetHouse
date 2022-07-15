const sequelize = require("../../models/db");
const DataTypes = require("sequelize");
const cliente = require("../../models/Cliente")(sequelize, DataTypes);
const bcrypt = require("bcrypt-nodejs");

const cadastroController = {
  login: (req, res) => {
    res.render("pages/login");
  },
  create: async (req, res) => {
    const {
      nome_cliente,
      nome_social,
      telefone,
      email,
      senha,
      confirma_senha,
    } = req.body;

    if (await cliente.findOne({ where: { email: email } })) {
      console.log("Email ja existe");
      return res.render("pages/login", {
        message: ".",
      });
    }
    if (!nome_cliente) {
      return res.status(422).json({ message: "Nome é obrigatorio!" });
    }
    if (!email) {
      return res.status(422).json({ message: "Email é obrigatório" });
    }
    if (!senha) {
      return res.status(422).json({ message: "Senha é obrigatório!" });
    }
    if (senha.length < 6) {
      return res
        .status(422)
        .json({ message: "Senha deve ter pelo menos 6 caracteres!" });
    }
    if (senha !== confirma_senha) {
      return res.status(422).json({ message: "As senhas deve ser igual!" });
    }

    const salt = await bcrypt.genSalt(12);
    const senhaHash = await bcrypt.hash(senha, salt);

    const user = await cliente
      .create({
        nome_cliente,
        nome_social,
        telefone,
        email,
        senha: senhaHash,
        confirma_senha,
      })

      //verificando se conseguio cadastrar com sucesso
      .then(() => {
        return res.render("pages/home");
      })
      .catch((err) => {
        return res.status(400).json({
          erro: true,
          mensage: err,
        });
      });
  },

  //login do usuario

  authlogin: async (req, res) => {
    const { email, senha } = req.body;

    if (!email) {
      return res.status(422).json({ message: "Email é obrigatório" });
    }
    if (!senha) {
      return res.status(422).json({ message: "Senha é obrigatório!" });
    }

    //verificando se o email do usuario existe
    const user = await cliente.findOne({ where: { email: email } });

    if (!user) {
      return res.status(422).json({ msg: "Usuario Não encontrado" });
    }
    const senhaUser = await bcrypt.compare(senha, user.senha);
    if (!senhaUser) {
      return res.status(422).json({ msg: "senha incorreta" });
    }
  },
};

module.exports = cadastroController;
