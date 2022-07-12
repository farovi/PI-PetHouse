module.exports = (sequelize, DataTypes) => {
    const Fornecedor = sequelize.define(
        "Fornecedor",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },

            nome: DataTypes.STRING,

            contato_telefone: DataTypes.STRING,

            contato_email: DataTypes.STRING,

            created_at: {
                type: DataTypes.DATE,
            },

            updated_at: {
                type: DataTypes.DATE,
            },
        },
        {
            tableName: 'fornecedores',
            timestamp: true
        }
    );

    Fornecedor.associate = (listaDeModels) => {
        Fornecedor.hasMany(listaDeModels.Endereco, {
            foreingKey: "fornecedor_id",
            as: "enderecos"
        });

        Fornecedor.belongToMany(listaDeModels.Pedido, {
            foreingKey: "pedido_id",
            as: "pedidos",
            through: listaDeModels.ProdutoHasFornecedor
        });
    };

    return Fornecedor;
};
