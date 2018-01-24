var express = require('express');
var router = express.Router();

/* GET coins listing. */

var coin_controller = require('../controllers/coinController');
router.get('/coins', coin_controller.Coin());
//console.log("res.send(coins)", req, res);

module.exports = router;
