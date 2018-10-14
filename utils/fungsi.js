/**
 * Created by ignat on 05-Jan-17.
 */
const jwt = require("jsonwebtoken");
const fixvalue = require('./fixvalue.json')
const strPesan = fixvalue.Pesan;
const strResponID = fixvalue.Kode;
let strJSON;

module.exports =
{
  DaftarUserSukses	:	function()
  {
    strJSON =	{"CoreResponse" : {"Kode"	:	strResponID.Sukses, "Pesan"	:	strPesan.DaftarUserSukses}};
    return strJSON;
  },
  DaftarUserGagal	:	function()
  {
    strJSON =	{"CoreResponse" : {"Kode"	:	strResponID.Gagal, "Pesan"	:	strPesan.DaftarUserGagal}};
    return strJSON;
  },
  DaftarUserAda	:	function()
  {
    strJSON =	{"CoreResponse" : {"Kode"	:	strResponID.Gagal, "Pesan"	:	strPesan.DaftarUserAda}};
    return strJSON;
  }
};
