var express = require('express');
var router = express.Router();
var brandctrl = require('./../controllers/brandctrl');

/* GET users listing. */
router.get('/', function(req, res)
{
  res.send("Don't do that again !!!");
});

/* GET API Pengambilan seluruh data image product */
router.get('/databrand', brandctrl.getAllBrand);

module.exports = router;
