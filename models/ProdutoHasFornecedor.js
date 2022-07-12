module.exports = (sequelize, DataTypes) => {
    const ProdutoHasFornecedor = sequelize.define(
        "ProdutoHasFornecedor",
        {
            valor_pago: DataTypes.FLOAT,
            produto_id: DataTypes.INTEGER,
            fornecedor_id: DataTypes.INTEGER,
            // created_at: DataTypes.DATE,
            // updated_at: DataTypes.DATE,
        },
        {
            tableName: 'produtoHasFornecedor',
            timestamp: true
        }
    );

    return ProdutoHasFornecedor;
};
