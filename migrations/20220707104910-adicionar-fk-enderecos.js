'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.addColumn('enderecos', { 
      cliente_id: {type: Sequelize.INTEGER,
      allowNull: false,
      references:{
        model:"Cliente",
        key: 'id'
      }},
      fornecedor_id: {type: Sequelize.INTEGER,
      allowNull: false,
      references:{
        model:"Fornecedor",
        key: 'id'
      }}

     })
     
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.dropTable('enderecos');
    
  }
};
