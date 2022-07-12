'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('administradores', {
            id: {
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

            email: {
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
        })

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('administradores');

    }
};
