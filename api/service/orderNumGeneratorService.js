var dateFormat = require('date-format');

var orderNumGeneratorDao= require('../dao/orderNumGeneratorDao');
var generateOrderNumber= require('../util/generateOrderNum');


module.exports={
    generateOrderNumber: async function(req){
        var orderListArr=undefined;
        var market=undefined;
        var brand= undefined;
        var uniqueId=undefined;

        if(req.method==='GET'){
            market= req.params.market;
            brand= req.params.brand;
        }

        if(req.method==='POST'){
            market= req.body.market;
            brand= req.body.brand;
        }

        try{
            var result={};
            var status;
            if((market===undefined)||(brand===undefined)){
               status=400;
               result.errMsg="market and brand must not be empty.";
            }else{
                orderListArr=await orderNumGeneratorDao.generateOrderNumber();
                uniqueId= generateOrderNumber.generateOrderNum(market, brand, orderListArr);
                status=200;
                result.orderId=uniqueId;
                result.marketId= market;
                result.brandName= brand;
                result.createdDate = dateFormat.asString('dd/MM/yyyy', new Date());
            }
            return [status,result];
        }catch(err){
            throw err;
        } 
        
    }
}