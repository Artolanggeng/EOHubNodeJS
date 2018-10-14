/**
 * Created by ignat on 03-Jan-17.
 */

let UserModel = require('./../models/usermodel');
let Fungsi = require('./../utils/fungsi');
let jwt = require("jsonwebtoken");
let fixvalue = require('./../utils/fixvalue.json');

let ctrlTest = function(req, res)
{
    res.status(fixvalue.Kode.OK).json('Sukses !!!');
};

let ctrlToken = function(req, res)
{
    console.log(req.headers);
    console.log(req.body);
    res.status(fixvalue.Kode.OK).json({access_token : 'Sukses !!!'});
};

let ctrlDaftarUser = function(req, res)
{
  UserModel.modelDaftarUser(req, res, function(err)
  {
    if(err)
      res.status(fixvalue.Kode.Error).json(Fungsi.DaftarUserGagal());
    else
      res.status(fixvalue.Kode.OK).json(Fungsi.DaftarUserSukses());
  });
};

module.exports = {postTest : ctrlTest, postToken : ctrlToken, postDaftarUser : ctrlDaftarUser};
