var orderNumGeneratorService= require('../service/orderNumGeneratorService');

module.exports = {

    generateOrderNum: async function (req, res) {
        try{
            var resultObj= [];
            resultObj= await orderNumGeneratorService.generateOrderNumber(req);
            switch(resultObj[0]){
                case 200:
                var order= {};
                order= resultObj[1];
                res.status(resultObj[0]).send(order);
                break;

                case 400:
                var errMsg= resultObj[1];
                res.status(resultObj[0]).send(errMsg);
                break;

                default:
                var errMsg= 'No data found.';
                res.status(404).send({errMsg});
            }
        }catch(err){
            console.log(err);
            res.status(400).send({err});
        }
    }
}
