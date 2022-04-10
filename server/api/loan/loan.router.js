const { 
    createLoan,
    getLoan
} = require('./loan.controller');
const router = require('express').Router();

router.post('/', createLoan);
router.get('/:id', getLoan);

module.exports = router;