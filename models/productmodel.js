/**
 * Created by ignat on 03-Jan-17.
 */
let Fungsi = require('../utils/AllFunction');
let Fixvalue = require('./../utils/fixvalue.json');

let strQuery;

module.exports.AllProductData =
function (conn, callback)
{
	strQuery = 'SELECT a.UID BrandID, a.BrandName, GROUP_CONCAT(JSON_OBJECT("ProductID", b.UID, "ProductName", b.ProductName, "Filename", ' +
						 'b.Filename)) Product FROM brands a INNER JOIN products b ON a.UID=b.BrandID GROUP BY a.BrandName ' +
						 'ORDER BY a.BrandName';
	conn.query(strQuery, callback);
};
