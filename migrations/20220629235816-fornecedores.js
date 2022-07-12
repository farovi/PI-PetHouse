'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('fornecedores', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },

            nome: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            contato_telefone: {
                type: Sequelize.STRING(11),
                allowNull: false,
            },

            contato_email: {
                type: Sequelize.STRING(99),
                allowNull: true
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

        await queryInterface.dropTable('fornecedores');

    }
};
