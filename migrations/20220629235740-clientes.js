'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('clientes', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },

            nome_cliente: {
                type: Sequelize.STRING,
                allowNull: false
            },

            nome_social: {
                type: Sequelize.STRING,
                allowNull: false
            },

            telefone: {
                type: Sequelize.STRING(11),
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

            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },

            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('clientes');

    }
};
