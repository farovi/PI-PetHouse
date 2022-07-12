'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('produtoHasFornecedor', {
            produto_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "produtos",
                    key: 'id'
                }
            },

            fornecedor_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "fornecedores",
                    key: 'id'
                }
            },

            valor_pago: Sequelize.FLOAT
        });

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('produtoHasFornecedor');

    }
};
