var express = require('express');
var router = express.Router();
var productctrl = require('./../controllers/productctrl');

/* GET users listing. */
router.get('/', function(req, res)
{
  res.send("Don't do that again !!!");
});

/* GET API Pengambilan seluruh data image product */
router.get('/dataproduct', productctrl.getAllProduct);

module.exports = router;
