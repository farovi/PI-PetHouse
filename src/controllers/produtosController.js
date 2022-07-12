const sequelize = require("../../models/db");
const DataTypes = require("sequelize");
const Produtos = require("../../models/Produtos")(sequelize, DataTypes);

const produtosController = {
  index: async (req, res) => {
    const produtos = await Produtos.findAll();
    res.render('produtos',{produtos});
  },
};

module.exports = produtosController;


