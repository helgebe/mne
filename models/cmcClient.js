
var request = require('request');
// couchdb setup

//todo: create db if not exist console.log("couch.use:",couch.use('coins').server);
var coinsdb = couch.use('coins');
//db.on('error', console.error.bind(console, 'db error'));
//console.log(coinsdb.list);
var cmcClient = request('https://api.coinmarketcap.com/v1/ticker/?limit=1', function(error,resp,body){

  coins = JSON.parse(body);
  //todo: conditional insert, can
  for (i = 0; i < coins.length; i ++){
    //coinsdb.list(function (err,res){
    //  console.log(res.rows)
    //});

    // look into this latercoinsdb.get(coins[i].name, function(err,body){
    //   if(err){
    //     console.log("get_err:",err);
    //   }else{
    //     console.log("get:",body);
    //   }
    // });
    coinsdb.insert({
      name: coins[i].name,
      symbol: coins[i].symbol}, coins[i].name, function (err,ins){
      if(err && err.statusCode == 409) {
        console.log("Document update conflict. It is dirty but ok for now. We only want new docs.", err);
      } else if(err) {
        console.log(err);
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
