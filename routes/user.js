var express = require('express');
var router = express.Router();
var userctrl = require('./../controllers/userctrl');

/* GET users listing. */
router.get('/', function(req, res, next)
{
  res.send("Don't do that again !!!");
});

/* POST API Test */
router.post('/test', userctrl.postTest);

/* POST API Test */
router.post('/token', userctrl.postToken);

/* API for pendaftaran user password */
router.post('/daftaruser', userctrl.postDaftarUser);

module.exports = router;
