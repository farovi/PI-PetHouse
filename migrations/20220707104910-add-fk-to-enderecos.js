'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.addColumn(
            'enderecos',
            'cliente_id',
            {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "clientes",
                    key: 'id'
                }
            }
        );
        await queryInterface.addColumn(
            'enderecos',
            'fornecedor_id',
            {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "fornecedores",
                    key: 'id'
                }
            }
        );
    },



    async down(queryInterface, Sequelize) {

        await queryInterface.removeColumn('enderecos', 'cliente_id');

        await queryInterface.removeColumn('enderecos', 'fornecedor_id');

    }
};
