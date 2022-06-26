module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define("Pedido", {
    data: DataTypes.STRING,

    created_at:DataTypes.DATE,
    updated_at: DataTypes.DATE,

    fk_cliente:{
        type: DataTypes.INTEGER,
    },
 }, {
     tableName: 'pedido',
     timestamp: true
 })

 Pedido.associate = (listaDeModels) => {
    Pedido.belongTo(listaDeModels.Pedido, {
        foreingKey: "fk_Cliente",
        as: 'cliente'
    })
    Pedido.belongToMany(listaDeModels.Produto, {
        foreingKey: "fk_produto",
        as:"produto",
        through:listaDeModels.ProdutosHasPedido
    }
        )
        Pedido.belongToMany(listaDeModels.Fornecedor, {
            foreingKey: "fk_forncedor",
            as:"fornecedor",
            through:listaDeModels.ProdutosHasFornecedor
        }
            )
       ;
   };
     return Pedido;
 };

 