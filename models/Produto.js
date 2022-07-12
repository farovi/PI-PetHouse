module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define(
        "Produto",
        {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },

            racao: DataTypes.STRING,
            sabor_racao: DataTypes.STRING,
            peso_pacote_racao: DataTypes.STRING,
            preco_venda: DataTypes.FLOAT,

            created_at: {
                type: DataTypes.DATE,
            },

            updated_at: {
                type: DataTypes.DATE,
            },
        },
        {
            tableName: 'produtos',
            timestamp: true
        }
    );

    Produto.associate = (listaDeModels) => {
        Produto.belongToMany(listaDeModels.Pedido, {
            foreingKey: "pedido_id",
            as: "pedidos",
            through: listaDeModels.ProdutoHasPedido
        });
    };

    return Produto;
};
