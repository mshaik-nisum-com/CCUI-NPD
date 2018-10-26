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
            if((market===undefined)||(brand===undefined)){
               result.status=400;
               result.data="market and brand must not be empty.";
            }else{
                orderListArr=await orderNumGeneratorDao.generateOrderNumber();
                uniqueId= generateOrderNumber.generateOrderNum(market, brand, orderListArr);
                result.status=200;
               result.data=uniqueId;
            }
            return result;
        }catch(err){
            throw err;
        } 
        
    }
}