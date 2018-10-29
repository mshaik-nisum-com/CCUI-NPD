var orderNumGeneratorService= require('../service/orderNumGeneratorService');

module.exports = {

    generateOrderNum: async function (req, res) {
        try{
            var resultObj=await orderNumGeneratorService.generateOrderNumber(req);
            switch(resultObj.status){
                case 200:
                var orderId= resultObj.data;
                res.status(resultObj.status).send({orderId});
                break;

                case 400:
                var errMsg= resultObj.data;
                res.status(resultObj.status).send({errMsg});
                break;

                default:
                var errMsg= 'No data found.';
                res.status(404).send(errMsg);
            }
        }catch(err){
            console.log(err);
            res.status(400).send(err);
        }
    }
}

