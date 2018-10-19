/**
 * Created by ignat on 03-Jan-17.
 */
let Fungsi = require('../utils/AllFunction');
let fixvalue = require('./../utils/fixvalue.json');

let strQuery;

module.exports.RegistrationData =
function (conn, callback)
{
	strQuery = 'SELECT UID, Name, Display, Description FROM members';
	conn.query(strQuery, callback);
};
