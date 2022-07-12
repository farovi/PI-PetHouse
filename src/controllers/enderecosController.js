const sequelize = require("../../models/db")
const DataTypes = require("sequelize");
const Enderecos = require("../../models/Enderecos")(sequelize, DataTypes);



const enderecosController = {
    index: async (req, res) => {
      const endereco = await Enderecos.findAll();
      res.render('endereço', {endereco})
   
     }
   }
   
   module.exports = enderecosController;