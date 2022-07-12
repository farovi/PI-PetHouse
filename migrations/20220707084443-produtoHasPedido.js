'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('produtoHasPedido', {
            produto_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "produtos",
                    key: 'id'
                }
            },

            pedido_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "pedidos",
                    key: 'id'
                }
            },

            quantidade: Sequelize.INTEGER
        });

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('produtoHasPedido');

    }
};


//sequelize migration:generate --name produtoHasPedido <=  (exemp. comando para criar migrates)//
