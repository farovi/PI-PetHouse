'use strict';

const { QueryInterface, Sequelize } = require("sequelize/types");

module.exports = {
    up: (QueryInterface.createTable('cliente', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nome_cliente: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nome_social: Sequelize.STRING,
        telefone: {
            type: Sequelize.STRING(11),
            allowNull: false
        },
        email:{
            type: Sequelize.STRING(99),
            unique: true,
            allowNull: false

        },
        senha: {
            type: Sequelize.STRING(10),
            allowNull: false
        }
    }))
}