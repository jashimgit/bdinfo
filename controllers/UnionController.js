const model = require('../models');

// getAllUnion,
    // addNewUnion


    const getAllUnion = async (req, res ) => {
        try {
            const data = await model.Union.findAll({
                include: model.Upazila
            });
            if (data.length > 0) {
                res.status(200).json({
                    total: data.length,
                    divisions: data,
                });
            } else {
                res.status(404).json({
                    message: 'sorry, no data found',
                });
            }
        } catch (err) {
            res.status(500).json({
                error: 'internal server error ' + err,
            });
        }
    }

    const addNewUnion = async (req, res) => {
        try {
            const respose = await model.Union.create(req.body);
            if (response) {
                res.status(200).json({
                    message: 'New Division added successfully',
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

    module.exports = { getAllUnion, addNewUnion }