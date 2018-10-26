var orders= require('../models/orders');
module.exports={
    generateOrderNumber: async function(){
        var ordersArr;
        ordersArr = await orders.find({}, { "orderID": 1, _id: 0 }).then(function (data) {
            return data;
        }).catch(function (error) {
            console.log(error);
        });
        return ordersArr;
    }
}