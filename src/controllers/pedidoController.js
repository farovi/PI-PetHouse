const sequelize = require("../../models/db")
const DataTypes = require("sequelize");
const Pedido = require("../../models/Pedido")(sequelize, DataTypes);

const pedidoController = {
    index: 
      async (req, res) => {
        const pedido = await Pedido.findAll();
        res.render('pedido', {pedido})

    }
     }
   
   module.exports = pedidoController;