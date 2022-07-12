const sequelize = require("../../models/db")
const DataTypes = require("sequelize");
const Fornecedor = require("../../models/Fornecedor")(sequelize, DataTypes);


const fornecedorController = {
    index: async (req, res) => {
   const fornecedor = await Fornecedor.findAll();
   res.render( 'fornecedor',{fornecedor})
     }
   }
   
   module.exports = fornecedorController;