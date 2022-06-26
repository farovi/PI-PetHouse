module.exports = (sequelize, DataTypes) => {
    const Fornecedor = sequelize.define("Fornecedor", {
    nome: DataTypes.STRING,
    contato_telefone: DataTypes.STRING,
    contato_email: DataTypes.STRING,
    created_at:DataTypes.DATE,
    updated_at: DataTypes.DATE
 }, {
     tableName: 'fornecedor',
     timestamp: true
 });


 Fornecedor.associate = (listaDeModels) => {
    Fornecedor.hasMany(listaDeModels.Enderecos,
        {
            foreingKey: "fk_Fornecedor",
            as: "enderecos"
        })
           Fornecedor.belongToMany(listaDeModels.Pedido, {
                foreingKey: "fk_pedido",
                as:"pedido",
                through:listaDeModels.ProdutosHasFornecedor
            }
                )
           ;
        
} ;


     return Fornecedor;
 };