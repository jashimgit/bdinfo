const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../DbManager/DB');
const District = require('./DistrictModel');

const Division = sequelize.define('Division', {
    div_name: {
        type: DataTypes.STRING,
    },
    div_bn_name: {
        type: DataTypes.STRING,
    },
    div_url: {
        type: DataTypes.STRING,
    },
}, {
    tableName: 'divisions'
});

module.exports = Division;
