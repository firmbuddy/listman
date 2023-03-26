// const mysql = require('mysql2');
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'persons',
//     password: 'Qaniaku7*'
// });

// module.exports = pool.promise()

const Sequelize = require('sequelize');

const sequelize = new Sequelize('persons', 'root', 'Qaniaku7*', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;