const sequelize = require("../../models/db")
const DataTypes = require("sequelize");
const CartaoCadastro = require("../../models/CartaoCadastro")(sequelize, DataTypes);


const cartaoCadastroController = {
    index: async (req, res) => {
    const cartaoCadastro = await CartaoCadastro.findAll();
    res.render('cartaoCasdastro', {cartaoCadastro})
     }
   }
   
   module.exports = cartaoCadastroController;