'use strict';

const { QueryInterface, Sequelize } = require("sequelize/types");

module.exports = {
    up: (QueryInterface.createTable('produto', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        racao: {
            type: Sequelize.STRING,
            allowNull: false
        },
        sabor_racao: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        peso_pacote_racao:{
           type: Sequelize.STRING
        },
        preco_venda:{
            type: Sequelize.FLOAT
        }
    }))
};

down : (QueryInterface, Sequelize) =>{
    return QueryInterface.dropTable('produto');
};