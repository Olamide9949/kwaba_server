const fs = require('fs');
const Uuid = require('uuid');

module.exports = {
    create: (data, callBack) => {
        [
            data.rentStatus,
            data.rentAmount,
            data.salary, 
            data.tenure
        ]
        let obj = {
            loans: []
         };
         let message = 'You have pending loan.';
          
         let json = JSON.stringify(obj);
         let uuidV4 = Uuid.v4()  
         let new_id = uuidV4;

         fs.readFile('loans.json', 'utf8', function readFileCallback(err, res){ 
            if (err){
                return callBack(null, err);
            }
            obj = JSON.parse(res);
            if(obj.loans.length !==0){
                return callBack(null, message);
            }else{
                obj.loans.push({id:new_id, rent_status:data.rentStatus, loan_amount:data.rentAmount, customer_salary:data.salary, tenure:data.tenure});
                json = JSON.stringify(obj);
                fs.writeFile('loans.json', json, 'utf8', callBack);
            }
            let response = {
                id:new_id,
                details:data
            }
            return callBack(null, response);
        });
    },
    getLoan: callBack => {
        fs.readFile('loans.json', 'utf8', function readFileCallback(err, res){
            if (err){
                return callBack(null, err);
            }
            obj = JSON.parse(res);
            return callBack(null, obj)
        });
    }
};
