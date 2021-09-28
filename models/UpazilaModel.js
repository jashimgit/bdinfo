const {Sequelize, DataTypes} = require('sequelize');
const { sequelize }  = require('../DbManager/DB');

const Upazila = sequelize.define('Upazila', {
    dist_id: {
        type: DataTypes.TINYINT,
    },
    up_name: {
        type: DataTypes.STRING
    },
    up_bn_name: {
        type: DataTypes.STRING
    },
    up_url: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'upazilas'
})

module.exports = Upazila;