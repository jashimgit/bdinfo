const model = require('../models');

async function getAll(req, res) {
    const data = await model.Division.findAll({
        include: model.District
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
}

module.exports = {getAll}