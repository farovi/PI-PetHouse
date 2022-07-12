const sequelize = require("../../models/db")
const DataTypes = require("sequelize");
const ProdutoHasFornecedor = require("../../models/ProdutoHasFornecedor")(sequelize, DataTypes);



const produtoHasFornecedorController = {
    index: async (req, res) => {
      const produtoHasFornecedor = await ProdutoHasFornecedor.findAll();
      res.render('produtoHasFornecedor',{produtoHasFornecedor})
      
     }
   }
   
module.exports = produtoHasFornecedorController;