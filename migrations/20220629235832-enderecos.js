'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('enderecos', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },

            cep: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            rua: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            numero: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },

            complemento: {
                type: Sequelize.STRING,
                allowNull: true,
            },

            ponto_de_referencia: {
                type: Sequelize.STRING,
                allowNull: true,
            },

            bairro: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            cidade: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            estado: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            cliente_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "clientes",
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

            created_at: {
                type: DataTypes.DATE,
            },

            updated_at: {
                type: DataTypes.DATE,
            },
        })

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('enderecos');

    }
};
