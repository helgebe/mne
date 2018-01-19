var express = require('express');
var router = express.Router();
var request = require('request');

request('https://api.coinmarketcap.com/v1/ticker/?limit=10')

module.exports = cmcClient;
