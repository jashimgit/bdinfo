const { DataTypes } = require('sequelize');
const { sequelize } = require('../DbManager/DB');

const Union = sequelize.define('Union', {
    upazila_id: {
        type: DataTypes.TINYINT,
    },
    un_name: {
        type: DataTypes.STRING,
    },
    un_bn_name: {
        type: DataTypes.STRING,
    },
    un_url: {
        type: DataTypes.STRING
    }
})

module.exports = Union;