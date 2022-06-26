module.exports = (sequelize, DataTypes) => {
    const CartaoCadastro = sequelize.define("CartaoCadastro", {
    apelido_cartao: DataTypes.STRING,
    numero_cartao: DataTypes.STRING,
    cvv: DataTypes.STRING,
    vencimento_cartao: DataTypes.STRING,
    nome_cartao: DataTypes.STRING,
    created_at:DataTypes.DATE,
    updated_at: DataTypes.DATE,
    fk_cliente:{
        type: DataTypes.INTEGER,
    },
 }, {
     tableName: 'cartaoCadastro',
     timestamp: true
 });

 CartaoCadastro.associate = (listaDeModels) => {
    CartaoCadastro.belongTo(listaDeModels.CartaoCadastro, {
        foreingKey: "fk_Cliente",
        as: 'cliente'
    })
   };

     return CartaoCadastro;
 };