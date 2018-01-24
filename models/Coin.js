var couch = require('nano')('http://localhost:5984');
var coins = couch.db.use('coins');
coinlist = coins.list(function (err,body){
  if (err){
    err
  }else{
    Coin = body.rows.length;
  }
});
console.log("couch-:", coinlist);
var Coin = function(){
  coinsdb = couch.use('coins');
  coins = coinsdb.list(function(err,body){
    if (!err){
      return body;
    }
  })};

module.exports = Coin;
