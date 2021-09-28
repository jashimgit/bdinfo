const router = require('express').Router();
const {
    create,
    getAllDivision,
    getDivisionById,
} = require('../controllers/DivisionController');

router.get('/', getAllDivision);

router.post('/', create);

// get division by id
router.get('/:id', getDivisionById);

module.exports = router;
