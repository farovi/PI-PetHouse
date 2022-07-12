const sequelize = require("../../models/db")
const DataTypes = require("sequelize");
const ProdutosHasPedido = require("../../models/ProdutosHasPedido");
const ProdutoHasPedido = require("../../models/ProdutosHasPedido")(sequelize, DataTypes);


const produtoHasPedidoController = {
    index: async (req, res) => {
    const produtoHasPedido = await ProdutosHasPedido.findAll();
    res.render('produtoHasPedido',{ProdutoHasPedido})
     }
   }
   
   module.exports = produtoHasPedidoController;