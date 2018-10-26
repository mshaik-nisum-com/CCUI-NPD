var marketCodes=require("../constants/marketCodes");

module.exports= {
    generateOrderNum: function(market, brand, orderListArr) {
        var uniqueId = "";
        var condition= true;
        var orderIdArr=[];
        var key = market + brand.toUpperCase();
        try{
            orderListArr.forEach((element)=>{
                orderIdArr.push(element.orderID);
            });

            console.log(marketCodes[market]);
            key += marketCodes[market];

            while(condition){
                
                uniqueId="";

                for (var i = 0; i < 7; i++) {
                    uniqueId += key.charAt(Math.floor(Math.random() * key.length));
                }

                if(!orderIdArr.includes(uniqueId)){
                    if((/\d/.test(uniqueId) && /[A-Z]/.test(uniqueId))){
                        condition= false;
                    }
                }

            }
        }catch(err){
            console.log(err);
            throw err;
        }
        
        return uniqueId;
    }
}