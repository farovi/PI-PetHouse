module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define("Cliente", {
    nome_cliente: DataTypes.STRING,
    nome_social: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    created_at:DataTypes.DATE,
    updated_at: DataTypes.DATE
 }, {
     tableName: 'cliente',
     timestamp: true
 })
     return Cliente;
 };