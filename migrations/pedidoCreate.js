'use strict';

const { QueryInterface, Sequelize } = require("sequelize/types");

module.exports = {
    up: (QueryInterface.createTable('pedido', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        data: {
            type: Sequelize.DATETIME,
            allowNull: false
        },
       
    }))
};

down : (QueryInterface, Sequelize) =>{
    return QueryInterface.dropTable('pedido');
};