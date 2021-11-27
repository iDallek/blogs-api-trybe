'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      displayName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'display_name',
      },

      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },

      password: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

      image: {
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
   return queryInterface.dropTable('Users');
  }
};