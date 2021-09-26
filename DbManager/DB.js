const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');


dotenv.config();
const sequelize = new Sequelize('testdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.sync();

module.exports = { sequelize, Sequelize };
