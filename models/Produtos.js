module.exports = (sequelize, DataTypes) => {
    const Produtos = sequelize.define("Produtos", {
    racao: DataTypes.STRING,
    sabor_racao: DataTypes.STRING,
    peso_pacote_racao: DataTypes.STRING,
    preco_venda: DataTypes.FLOAT,
    created_at:DataTypes.DATE,
    updated_at: DataTypes.DATE
 }, {
     tableName: 'produtos',
     timestamp: true
 });

 Produtos.associate = (listaDeModels) => {
    Produtos.belongToMany(listaDeModels.Pedido, {
        foreingKey: "fk_pedido",
        as:"pedido",
        through:listaDeModels.ProdutosHasPedido
    }
        )
   };

     return Produtos;
 };
