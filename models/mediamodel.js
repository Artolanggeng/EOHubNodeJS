/**
 * Created by ignat on 03-Jan-17.
 */
let Fungsi = require('../utils/AllFunction');
let Fixvalue = require('./../utils/fixvalue.json');

let strQuery;

module.exports.AllProductData =
function (conn, callback)
{
	strQuery = 'SELECT UID, Filename, Display, Description, CONCAT("' + Fixvalue.Server.BaseURL + ':", "' +
						 Fixvalue.Server.Port + '", "' + Fixvalue.RouterAPIV1.media + '/imageproduct/", ' + 'Filename) ImageURL FROM products';
	conn.query(strQuery, callback);
};
