const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');


dotenv.config();
const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.sync();

module.exports = { sequelize, Sequelize };
