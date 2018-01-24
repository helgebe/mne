var Coin = require('../models/Coin');
console.log("coinmodel", Coin);
exports.Coin = function(request,response){
  response.pageInfo = "pageInfo";
  response.pageInfo.title = 'Other';
  response.render('home/Coin', response.pageInfo);
};
