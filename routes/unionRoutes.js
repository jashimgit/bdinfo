const router = require('express').Router();
const {
    getAllUnion,
    addNewUnion
} = require('../controllers/UnionController')


router.get('/', getAllUnion);
router.post('/', addNewUnion)

module.exports = router;