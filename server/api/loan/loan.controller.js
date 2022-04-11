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
        getLoan((err, results) => {
            if(err) {
                return res.status(500).json({
                    success: false,
                    message: `Oops ${err.messsage}`
                });
            }
            return res.status(202).json({
                success:true,
                data:results
            });
        });
    }
}
