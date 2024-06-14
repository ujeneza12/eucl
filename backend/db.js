const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('eucl_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

module.exports = sequelize;