const { create,
    getLoan,
 } = require('./loan.service');

module.exports = {
    createLoan: (req, res) => {
        const body = req.body;
        create(body, (err, results) => {
            if (err) {                
                return res.status(500).json({
                    success: false,
                    message: `Oops ${err.messsage}`
                });
            }
            return res.status(200).json({
                success: true,
                message: "Loan Created!",
                data:results
            });
        });
    },
    getLoan: (req, res) => {
        const ReqID = req.params.id;
        getLoan(ReqID, (err, results) => {
            if(err) {
                return res.status(500).json({
                    success: false,
                    message: `Oops ${err.messsage}`
                });
            }

            const interest = (parseInt(results[0].loan_amount) * (2 * 0.01)) / parseInt(results[0].tenure);
            let payment = ((parseInt(results[0].loan_amount) / parseInt(results[0].tenure)) + interest).toFixed(2);
            if(payment !=="NaN"){
                return res.status(201).json({
                    success: true,
                    data:{
                        id:results[0].id,
                        approved_amount:results[0].loan_amount,
                        monthly_payment:payment,
                        tenure:results[0].tenure
                    }
                });
            }else{
                return res.status(202).json({
                    success:true,
                    message:'You have no pending loan'
                });
            }
        });
    }
}