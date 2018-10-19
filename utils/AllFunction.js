/**
 * Created by ignat on 05-Jan-17.
 */
const jwt = require("jsonwebtoken");
const fixvalue = require('./fixvalue.json')
const strMsg = fixvalue.Msg;
const strRspID = fixvalue.Code;
let strJSON;

module.exports =
{
	SQLFailed	:	function()
	{
		strJSON =	{"CoreRsp" : {"Code"	:	strRspID.Fail, "Msg"	:	strMsg.strSQLFailed}};
		return strJSON;
	},
	RegistrationDataFailed	:	function()
	{
		strJSON =	{"CoreRsp" : {"Code"	:	strRspID.Fail, "Msg"	:	strMsg.RegistrationDataFailed}};
		return strJSON;
	},
	RegistrationDataEmpty	:	function()
	{
		strJSON =	{"CoreRsp" : {"Code"	:	strRspID.Empty, "Msg"	:	strMsg.RegistrationDataFailed}};
		return strJSON;
	},
	RegistrationDataSuccess	:	function(results)
	{
		strJSON =	{"CoreRsp" : {"Code"	:	strRspID.Success, "Msg"	:	strMsg.RegistrationDataSuccess}, "MembertypeRsp" : results};
		return strJSON;
	}
};