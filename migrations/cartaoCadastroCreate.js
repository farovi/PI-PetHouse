'use strict';

const { QueryInterface, Sequelize } = require("sequelize/types");

module.exports = {
    up: (QueryInterface.createTable('cartaoCadastro', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        apelido_cartao: Sequelize.STRING,
        numero_cartao: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        cvv:{
           type: Sequelize.STRING,
           allowNull: false
        },
        vencimento_cartao:{
            type: Sequelize.DATE,
            allowNull: false
        },
        nome_cartão:{
            type: Sequelize.STRING,
            allowNull: false
        }
    }))
};

down : (QueryInterface, Sequelize) =>{
    return QueryInterface.dropTable('cartaoCadastro');
};