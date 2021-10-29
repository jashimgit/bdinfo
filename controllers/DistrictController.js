const { Sequelize, Model } = require('sequelize');
const model = require('../models');

const getAllDistrict = async (req, res) => {
    try {
        const data = await model.District.findAll({
            include: model.Division
        });

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
};

const create = async (req, res) => {
    try {
        const response = await model.District.create(req.body);
        if (response) {
            res.status(200).json({
                message: 'New District added successfully',
            });
        }
    } catch (err) {
        res.status(500).json({
            error: 'internal server error ' + err,
        });
    }
};

const getDistrictById = async (req, res) => {
    try {
        const singleDistrict = await model.District.findAll({
            where: {
                id: req.params.id,
            },
        });

        if (singleDistrict) {
            res.status(200).json({
                district: singleDistrict,
            });
        } else {
            res.status(200).json({
                message: "sorry, no data found",
            });
        }
    } catch (err) {
        res.status(500).json({
            error: "internal server error " + err,
        });
    }
}

module.exports = { getAllDistrict, create, getDistrictById };
