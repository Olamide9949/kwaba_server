const { 
    createLoan,
    getLoan
} = require('./loan.controller');
const router = require('express').Router();

router.post('/', createLoan);
router.get('/', (req, res)=>{res.status(200).send('<h1>Kwaba Loans Welcome!</h1>')});
router.get('/offer', getLoan);

module.exports = router;
