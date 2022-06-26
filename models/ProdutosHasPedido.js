module.exports = (sequelize, DataTypes) => {
    const ProdutoHasPedido = sequelize.define("ProdutoHasPedido", {
    quantidade: DataTypes.NUMBER,
    
    created_at:DataTypes.DATE,
    updated_at: DataTypes.DATE,

    fk_produtos: DataTypes.INTEGER,
    fk_pedido: DataTypes.INTEGER 
 }, {
     tableName: 'ProdutosHasPedido',
     timestamp: true
 })
     return ProdutoHasPedido;
 };