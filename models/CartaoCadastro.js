module.exports = (sequelize, DataTypes) => {
    const CartaoCadastro = sequelize.define("CartaoCadastro", {
    apelido_cartao: DataTypes.STRING,
    numero_cartao: DataTypes.STRING,
    cvv: DataTypes.STRING,
    vencimento_cartao: DataTypes.STRING,
    nome_cartao: DataTypes.STRING,
    created_at:DataTypes.DATE,
    updated_at: DataTypes.DATE
 }, {
     tableName: 'cartaoCadastro',
     timestamp: true
 })
     return CartaoCadastro;
 };