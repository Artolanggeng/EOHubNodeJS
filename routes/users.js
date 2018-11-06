var express = require('express');
var router = express.Router();
var userctrl = require('./../controllers/userctrl');

/* GET users listing. */
router.get('/', function(req, res)
{
  res.send("Don't do that again !!!");
});

/* Get Test API */
router.get('/test', userctrl.getTest);

/* POST API pengiriman token */
router.post('/token', userctrl.postToken);

module.exports = router;
