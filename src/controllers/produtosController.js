const sequelize = require("../../models/db");
const DataTypes = require("sequelize");
const Produtos = require("../../models/Produtos")(sequelize, DataTypes);

const produtosController = {
  index: async (req, res) => {
    const produtos = await Produtos.findAll();
    res.json(produtos);
  },
};

module.exports = produtosController;

/*const produtosController = {
    index: (req, res) => {
      db.Produtos.findAll().then((data) => {
        res.send(JSON.stringify(data));
    }).catch((err) => {
        res.send(err);
    })
 }
};

   
   module.exports = produtosController;


   /* const sequelize = require('sequelize');
const db = require('../models');
pq não funciona?*/
