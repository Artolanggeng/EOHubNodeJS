/**
 * Created by ignat on 03-Jan-17.
 */

const Rijndael = require("rijndael-js");
let MemberModel = require('./../models/membermodel');
let Fungsi = require('../utils/AllFunction');
let jwt = require("jsonwebtoken");
let fixvalue = require('./../utils/fixvalue.json');

let ctrlData = function(req, res)
{
	req.getConnection(function (err, conn)
	{
		if(err)
			res.status(fixvalue.Code.Error).json(Fungsi.SQLFailed());
		else
		{
			MemberModel.RegistrationData(conn, function (err, results)
			{
				if(err)
					res.status(fixvalue.Code.NotSuccess).json(Fungsi.RegistrationDataFailed());
				else
				{
					if(results.length > 0)
						res.status(fixvalue.Code.OK).json(Fungsi.RegistrationDataSuccess(results));
					else
						res.status(fixvalue.Code.NotSuccess).json(Fungsi.RegistrationDataEmpty());
				}
			});
		}
	});
};

module.exports = {getData : ctrlData};
