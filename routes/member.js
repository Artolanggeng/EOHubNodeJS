var express = require('express');
var router = express.Router();
var memberctrl = require('./../controllers/memberctrl');

/* GET users listing. */
router.get('/', function(req, res)
{
  res.send("Don't do that again !!!");
});

/* Get Registration Data */
router.get('/data', memberctrl.getData);

module.exports = router;
