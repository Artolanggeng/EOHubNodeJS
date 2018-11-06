/**
 * Created by ignat on 03-Jan-17.
 */

let ProductModel = require('./../models/productmodel');
let Fungsi = require('../utils/AllFunction');
let Fixvalue = require('./../utils/fixvalue.json');

let ctrlAllProduct = function(req, res)
{
	req.getConnection(function (err, conn)
	{
		if(err)
			res.status(Fixvalue.Code.Error).json(Fungsi.SQLFailed());
		else
		{
			ProductModel.AllProductData(conn, function (err, results)
			{
				if(err)
					res.status(Fixvalue.Code.NotSuccess).json(Fungsi.AllProductFailed());
				else
				{
					if(results.length > 0)
						res.status(Fixvalue.Code.OK).json(Fungsi.AllProductSuccess(results));
					else
						res.status(Fixvalue.Code.NotSuccess).json(Fungsi.AllProductEmpty());
				}
			});
		}
	});
};

module.exports = {getAllProduct : ctrlAllProduct};
