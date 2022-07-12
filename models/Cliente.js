module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define(
        "Cliente",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },

            nome_cliente: {
                type: DataTypes.STRING,
            },

            nome_social: {
                type: DataTypes.STRING,
            },

            telefone: {
                type: DataTypes.STRING,
            },

            email: {
                type: DataTypes.STRING,
            },

            senha: {
                type: DataTypes.STRING,
            },

            created_at: {
                type: DataTypes.DATE,
            },

            updated_at: {
                type: DataTypes.DATE,
            },
        },
        {
            tableName: "cliente",
            timestamp: true,
        }
    );

    Cliente.associate = (listaDeModels) => {
        Cliente.hasMany(listaDeModels.Endereco, {
            foreingKey: "cliente_id",
            as: "enderecos",
        });
    };

    Cliente.associate = (listaDeModels) => {
        Cliente.hasMany(listaDeModels.Cartao, {
            foreingKey: "cliente_id",
            as: "cartoes",
        });
    };

    Cliente.associate = (listaDeModels) => {
        Cliente.hasMany(listaDeModels.Pedido, {
            foreingKey: "cliente_id",
            as: "pedidos",
        });
    };

    return Cliente;
};
