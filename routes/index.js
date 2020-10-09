var express = require('express');
const weatherController = require('../controller/weatherController');
var router = express.Router();

/* GET home page. */
router.get('/', weatherController.getWeatherData);

module.exports = router;
