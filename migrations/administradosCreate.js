'use strict';

const { QueryInterface, Sequelize } = require("sequelize/types");

module.exports = {
    up: (QueryInterface.createTable('administrador', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        funcao: Sequelize.STRING,
        telefone: {
            type: Sequelize.STRING,
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
        },
        matricula_colaborador: {
            type: Sequelize.STRING(10),
            allowNull: false
        }
    }))
};

down : (QueryInterface, Sequelize) =>{
    return QueryInterface.dropTable('administrador');
};
