'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('pedidos', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },

            data: {
                type: Sequelize.DATE,
                allowNull: false
            },

            cliente_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "clientes",
                    key: 'id'
                }
            },
        })

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('pedidos');

    }
};
