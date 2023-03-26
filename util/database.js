// const mysql = require('mysql2');
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'persons',
//     password: 'Qaniaku7*'
// });

// module.exports = pool.promise()

const Sequelize = require('sequelize');

// const sequelize = new Sequelize('persons', 'root', 'Qaniaku7*', {
//     dialect: 'mysql',
//     host: 'localhost'
// });

const sequelize = new Sequelize('persons', 'root', 'i6k0bsyBXkLhAKwz2Zej', {
    dialect: 'mysql',
    host: 'containers-us-west-87.railway.app'
});

module.exports = sequelize;