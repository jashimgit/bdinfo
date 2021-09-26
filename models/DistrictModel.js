const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../DbManager/DB');


const District = sequelize.define('District', {
    div_id: {
        type: DataTypes.TINYINT,
    },
    dist_name: {
        type: DataTypes.STRING,
    },
    dist_bn_name: {
        type: DataTypes.STRING,
    },
    dist_lat: {
        type: DataTypes.FLOAT,
    },
    dist_lon: {
        type: DataTypes.FLOAT,
    },
    dist_url: {
        type: DataTypes.STRING,
    },
});

module.exports = District;
