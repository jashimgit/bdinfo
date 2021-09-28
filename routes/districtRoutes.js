
const router = require('express').Router();
const { getAllDistrict, create, getDistrictById }  = require('../controllers/DistrictController');


router.get('/', getAllDistrict);
router.post('/', create);

// GET ALL DISTRICT

// GET /getAllDistrict

router.get('/:id', getDistrictById)



module.exports = router;