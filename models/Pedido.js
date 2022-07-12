module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define(
        "Pedido",
        {
            data: DataTypes.STRING,
            cliente_id: {
                type: DataTypes.INTEGER,
            },
            // created_at: DataTypes.DATE,
            // updated_at: DataTypes.DATE,
        },
        {
            tableName: 'pedidos',
            timestamp: true
        }
    )

    Pedido.associate = (listaDeModels) => {
        Pedido.belongTo(listaDeModels.Cliente, {
            foreingKey: "cliente_id",
            as: 'cliente'
        });

        Pedido.belongToMany(listaDeModels.Produto, {
            foreingKey: "produto_id",
            as: "produtos",
            through: listaDeModels.ProdutosHasPedido
        });

        Pedido.belongToMany(listaDeModels.Fornecedor, {
            foreingKey: "fornecedor_id",
            as: "fornecedores",
            through: listaDeModels.ProdutoHasFornecedor
        });
    };

    return Pedido;
};

