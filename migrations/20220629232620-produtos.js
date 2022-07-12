'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('produtos', {
            id: {
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

            peso_pacote_racao: {
                type: Sequelize.STRING
            },

            preco_venda: {
                type: Sequelize.FLOAT
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

        await queryInterface.dropTable('produtos')

    }
}
