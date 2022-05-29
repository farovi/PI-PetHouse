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
 })
     return Fornecedor;
 };