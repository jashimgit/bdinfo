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
const sequelize = new Sequelize('thsender_bdinfo, 'thsender_bdinfo', 'mist011he762', {
    host: 'localhost',
    dialect: 'mysql',
});

*/

(async () => {
    await sequelize.sync()
})();

module.exports = { sequelize, Sequelize };
