const { Sequelize } = require('sequelize');
const model = require('../models');


const getAllUpazila = async (req, res) => {
    try {
        const data = await model.Upazila.findAll({
            include: model.District
        })
        if (data.length > 0) {
            res.status(200).json({
                total: data.length,
                districts: data,
            });
        } else {
            res.status(200).json({
                message: 'sorry, no data found',
            });
        }
    } catch (err) {
        res.status(500).json({
            error: 'internal server error ' + err,
        });
    }
}

const createNewUpazila = async (req, res) => {
    try {
        const response = await model.Upazila.create(req.body);
        if (response) {
            res.status(200).json({
                message: 'New Upazila added successfully',
            });
        }
    } catch (err) {
        res.status(500).json({
            error: 'internal server error ' + err,
        });
    }
}

module.exports = {getAllUpazila, createNewUpazila}