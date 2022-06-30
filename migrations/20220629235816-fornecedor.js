'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.createTable('fornecedor', { 
      id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
  },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contato_telefone: {
        type: Sequelize.STRING(11),
        allowNull: false,
      },
 })
    
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.dropTable('fornecedor');
    
  }
};
