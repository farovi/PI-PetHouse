module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define(
    "Cliente",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      nome_cliente: {
        type: DataTypes.STRING,
      },
      nome_social: {
        type: DataTypes.STRING,
      },
      telefone: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      senha: {
        type: DataTypes.STRING,
      },
      // created_at: DataTypes.DATE,
      // updated_at: DataTypes.DATE,
    },
    {
      tableName: "cliente",
      timestamp: true,
    }
  );

  Cliente.associate = (listaDeModels) => {
    Cliente.hasMany(listaDeModels.Enderecos, {
      foreingKey: "fk_cliente",
      as: "enderecos",
    });
  };

  Cliente.associate = (listaDeModels) => {
    Cliente.hasMany(listaDeModels.CartaoCadastro, {
      foreingKey: "fk_cliente",
      as: "CartaoCadastro",
    });
  };

  Cliente.associate = (listaDeModels) => {
    Cliente.hasMany(listaDeModels.Pedido, {
      foreingKey: "fk_cliente",
      as: "Pedido",
    });
  };

  return Cliente;
};
