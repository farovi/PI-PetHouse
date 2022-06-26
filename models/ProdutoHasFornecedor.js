module.exports = (sequelize, DataTypes) => {
    const produtoHasFornecedor = sequelize.define("ProdutoHasFornecedor", {
    valor_pago: DataTypes.FLOAT,
    
    created_at:DataTypes.DATE,
    updated_at: DataTypes.DATE,
    fk_produtos: DataTypes.INTEGER,
    fk_fornecedor: DataTypes.INTEGER 

 }, {
     tableName: 'ProdutosHasFornecedor',
     timestamp: true
 })


 
     return produtoHasFornecedor;
 };