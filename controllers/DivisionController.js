const model = require("../models");
const { Sequelize, Model, Op } = require("sequelize");
// const {getAll} = require('../lib/dbQuery');

const create = async (req, res) => {
    // console.log(req.body)
    try {
        const response = await model.Division.create(req.body);
        if (response) {
            res.status(200).json({
                message: "New Division added successfully",
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
};

const getAllDivision = async (req, res) => {
    try {
        const data = await model.Division.findAll({
            include: model.District,
        });
        if (data.length > 0) {
            res.status(200).json({
                total: data.length,
                divisions: data,
            });
        } else {
            res.status(404).json({
                message: "sorry, no data found",
            });
        }
    } catch (err) {
        res.status(500).json({
            error: "internal server error " + err,
        });
    }
};

const getDivisionById = async (req, res) => {
    // console.log(req.params) { id: req.params}
    try {
        const singleDivision = await model.Division.findAll({
            where: {
                id: req.params.id,
            },
        });

        if (singleDivision) {
            res.status(200).json({
                data: singleDivision,
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
};

module.exports = { create, getAllDivision, getDivisionById };
