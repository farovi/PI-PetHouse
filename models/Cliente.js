import { Model, DataTypes } from "sequelize";
import { sequelize } from "../models";

module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define(
    "Cliente",
    {
      nome_cliente: DataTypes.STRING,
      nome_social: DataTypes.STRING,
      telefone: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
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
