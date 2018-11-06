/**
 * Created by ignat on 03-Jan-17.
 */
let Fungsi = require('../utils/AllFunction');
let Fixvalue = require('./../utils/fixvalue.json');

let strQuery;

module.exports.AllBrandData =
function (conn, callback)
{
	strQuery = 'SELECT UID, Filename, BrandName, Description, CONCAT("' + Fixvalue.Server.BaseURL + ':", "' +
		Fixvalue.Server.Port + '", "' + Fixvalue.RouterAPIV1.media + '/imagebrand/", ' + 'Filename) BrandURL FROM brands';
	conn.query(strQuery, callback);
};
