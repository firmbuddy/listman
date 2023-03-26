const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const People = sequelize.define('people', {
  title: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false
  },
  name: Sequelize.STRING
});


module.exports = People;