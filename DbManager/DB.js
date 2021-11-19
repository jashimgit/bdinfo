const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
dotenv.config();


// localhost connection

const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
    host: 'localhost',
    dialect: 'mysql',
});


// live server connection
/*
const sequelize = new Sequelize(process.env.DBNAMELIVE, process.env.DBUSERLIVE, process.env.DBUSERLIVE, {
    host: 'localhost',
    dialect: 'mysql',
});
*/


(async () => {
    await sequelize.sync()
})();

module.exports = { sequelize, Sequelize };
