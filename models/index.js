const Division = require('./DivisionModel');
const District = require('./DistrictModel');
const Upazila = require('./UpazilaModel');
const Union = require('./UnionModel');

District.belongsTo(Division, {
    foreignKey: 'div_id'
})

Division.hasMany(District, {
    foreignKey: 'div_id'
})

Upazila.belongsTo(District, {
    foreignKey: 'dist_id'
})

Union.belongsTo(Upazila, {
    foreignKey: 'upazila_id'
})

const models = {District, Division, Upazila, Union}



module.exports = models;