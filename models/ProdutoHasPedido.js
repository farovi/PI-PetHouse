module.exports = (sequelize, DataTypes) => {
    const ProdutoHasPedido = sequelize.define(
        "ProdutoHasPedido",
        {
            quantidade: DataTypes.NUMBER,
            produto_id: DataTypes.INTEGER,
            pedido_id: DataTypes.INTEGER,
            // created_at: DataTypes.DATE,
            // updated_at: DataTypes.DATE,
        },
        {
            tableName: 'produtoHasPedido',
            timestamp: true
        }
    );

    return ProdutoHasPedido;
};
