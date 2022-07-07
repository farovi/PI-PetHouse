const sequelize = require('sequelize')

const produtosController = {
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