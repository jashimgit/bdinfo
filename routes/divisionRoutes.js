const router = require('express').Router();
const {
    create,
    getAllDivision,
} = require('../controllers/DivisionController');

router.get('/', getAllDivision);

router.post('/', create);



module.exports = router;
