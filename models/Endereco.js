module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define(
        "Endereco",
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },

            cep: {
                type: DataTypes.STRING,
            },

            rua: {
                type: DataTypes.STRING,
            },

            numero: {
                type: DataTypes.STRING,
            },

            complemento: {
                type: DataTypes.STRING,
            },

            ponto_de_referencia: {
                type: DataTypes.STRING,
            },

            bairro: {
                type: DataTypes.STRING,
            },

            cidade: {
                type: DataTypes.STRING,
            },

            estado: {
                type: DataTypes.STRING,
            },

            cliente_id: {
                type: DataTypes.INTEGER,
            },

            fornecedor_id: {
                type: DataTypes.INTEGER,
            },

            created_at: {
                type: DataTypes.DATE,
            },

            updated_at: {
                type: DataTypes.DATE,
            },
        },
        {
            tableName: 'enderecos',
            timestamp: true
        }
    );

    Endereco.associate = (listaDeModels) => {
        Endereco.belongTo(listaDeModels.Cliente, {
            foreingKey: "cliente_id",
            as: 'cliente'
        })
    };

    Endereco.associate = (listaDeModels) => {
        Endereco.belongTo(listaDeModels.Fornecedor, {
            foreingKey: "fornecedor_id",
            as: 'fornecedor'
        })
    };

    return Endereco;
};
