const router = require('express').Router();
const {
    getAllUpazila,
    createNewUpazila
} = require('../controllers/UpazilaController')

router.get('/', getAllUpazila)
router.post('/', createNewUpazila)



module.exports = router;