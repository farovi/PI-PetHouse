const sequelize = require("../../models/db");
const DataTypes = require("sequelize");
const cliente = require("../../models/Cliente")(sequelize, DataTypes);

const cadastroController = {
  create: async (req, res) => {
    const { nome_cliente, nome_social, telefone, email, senha } = req.body;

    if (await cliente.findOne({ email })) {
      return res.render("pages/login", {
        message: "aaaaaaaaaaaaaaaaaaaaaaaaa",
      });
    }
    const user = await cliente
      .create({
        nome_cliente,
        nome_social,
        telefone,
        email,
        senha,
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
};

module.exports = cadastroController;
