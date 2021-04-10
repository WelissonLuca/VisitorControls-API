'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('visitas',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      bloco:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      apartamento:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      permitido:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      visitante_id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Visitantes', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updated_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('visitas');
  }
};
