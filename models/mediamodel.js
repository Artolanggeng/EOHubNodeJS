/**
 * Created by ignat on 03-Jan-17.
 */
let Fungsi = require('../utils/AllFunction');
let fixvalue = require('./../utils/fixvalue.json');

let strQuery;

module.exports.AllProductData =
function (conn, callback)
{
	strQuery = 'SELECT UID, ImageURL, Name, Description FROM products';
	conn.query(strQuery, callback);
};
