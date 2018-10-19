/**
 * Created by ignat on 03-Jan-17.
 */

const Rijndael = require("rijndael-js");
let UserModel = require('./../models/usermodel');
let Fungsi = require('../utils/AllFunction');
let jwt = require("jsonwebtoken");
let fixvalue = require('./../utils/fixvalue.json');

let key = "8bed6597274fa5b8e4c211c0c4934a59";   // EOHubs15102018
let iv = "53db7e00b6fc11d237bc1c018178e575";    // Artolanggeng15102018

let ctrlTest = function(req, res)
{
    res.status(fixvalue.Code.OK).json('Sukses !!!');
};

let ctrlToken = function(req, res)
{
    const strText = {"username": "aignat",
        "password": "d131eb8475f5fdbd62c5f8cd8d24efa4",
        "email": "ignat@hotmail.com",
        "handphone": "085770706777",
        "timestamp": "78393162"};



    let cipher = new Rijndael(key, "cbc");
    let ciphertext = cipher.encrypt(JSON.stringify(strText), 256, iv);

    console.log(ciphertext.toString('base64'));
    console.log(ciphertext.toString('hex'));
    console.log(req.headers);
    console.log(req.body);
    res.status(fixvalue.Kode.OK).json({access_token : 'Sukses !!!'});
};

module.exports = {getTest : ctrlTest, postToken : ctrlToken};
