/**
 * Created by ignat on 03-Jan-17.
 */

let MediaModel = require('./../models/mediamodel');
let Fungsi = require('../utils/AllFunction');
let Fixvalue = require('./../utils/fixvalue.json');

let ctrlImageProduct = function(req, res)
{
	res.download(Fixvalue.ImageDir.Product + req.params.Filename, '', function (err)
	{
		if(err)
			res.status(Fixvalue.Code.Error).json(Fungsi.ImageProductFailed());
	});
};

let ctrlAllProduct = function(req, res)
{
	req.getConnection(function (err, conn)
	{
		if(err)
			res.status(Fixvalue.Code.Error).json(Fungsi.SQLFailed());
		else
		{
			MediaModel.AllProductData(conn, function (err, results)
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

module.exports = {getImageProduct : ctrlImageProduct, getAllProduct : ctrlAllProduct};
