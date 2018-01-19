
var request = require('request');
// couchdb setup
var couch = require('nano')('http://localhost:5984');//couchdb driver
var coinsdb = couch.db.use('coins');
//db.on('error', console.error.bind(console, 'db error'));
console.log(coinsdb.list);
var cmcClient = request('https://api.coinmarketcap.com/v1/ticker/?limit=100', function(error,resp,body){

  coins = JSON.parse(body);
  for (i = 0; i < coins.length; i ++){
    //coinsdb.list(function (err,res){
    //  console.log(res.rows)
    //});
    coinsdb.insert( coins , coins[i].name , function (err,ins){
      if (err) {
        console.log(err)
      } else {
        console.log(ins);
      }
    })
    console.log("name:",coins[i].name);
  };
});

module.exports = cmcClient;


// couchdb setup
//var db = require('node')('http://localhost:5984/coins');//couchdb driver
//nano.Promise = global.Promise;
//var db = nano;
//db.on('error', console.error.bind(console, 'db error'));

//nano.db.create('coins');
//var coins = nano.db.use('coins');
