var mongoose= require('mongoose');

var orderlistSchema= new mongoose.Schema({
    orderID: {type: String, required: true, unique: true},           
});

module.exports= mongoose.model('orders',orderlistSchema);