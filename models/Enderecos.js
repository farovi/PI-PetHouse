module.exports = (sequelize, DataTypes) => {
    const Enderecos = sequelize.define("Enderecos", {
    rua: DataTypes.STRING,
    numero: DataTypes.STRING,
    cep: DataTypes.STRING,
    estado: DataTypes.STRING,
    bairro: DataTypes.STRING,
    ponto_de_referencia: DataTypes.STRING,
    complemento: DataTypes.STRING,
    created_at:DataTypes.DATE,
    updated_at: DataTypes.DATE,

    fk_cliente:{
        type: DataTypes.INTEGER,
    },
    fk_fornecedor:{
        type: DataTypes.INTEGER,
    }
 }, {
     tableName: 'enderecos',
     timestamp: true
 })

   Enderecos.associate = (listaDeModels) => {
    Enderecos.belongTo(listaDeModels.Cliente, {
        foreingKey: "fk_Cliente",
        as: 'cliente'
    })
   };

   Enderecos.associate = (listaDeModels) => {
    Enderecos.belongTo(listaDeModels.Fornecedor, {
        foreingKey: "fk_Fornecedor",
        as: 'fornecedor'
    })
   };

     return Enderecos;
 };