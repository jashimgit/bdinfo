
const router = require('express').Router();
const { getAllDistrict, create }  = require('../controllers/DistrictController');


router.get('/', getAllDistrict);
router.post('/', create);



module.exports = router;