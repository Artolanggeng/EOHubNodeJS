/**
 * Created by ignat on 03-Jan-17.
 */

let MediaModel = require('./../models/mediamodel');
let Fungsi = require('../utils/AllFunction');
let fixvalue = require('./../utils/fixvalue.json');

let ctrlImageProduct = function(req, res)
{
	var filesource = fixvalue.PhotoDir.SiswaBaru + req.params.Handphone + "/" + req.params.Photo;

	res.download(filesource, req.params.Handphone, function (err)
	{
		if(err)
			res.status(fixvalue.Code.Error).json(Fungsi.ImageProductFailed());
	});
};

let ctrlAllProduct = function(req, res)
{
	req.getConnection(function (err, conn)
	{
		if(err)
			res.status(fixvalue.Code.Error).json(Fungsi.SQLFailed());
		else
		{
			MediaModel.AllProductData(conn, function (err, results)
			{
				if(err)
					res.status(fixvalue.Code.NotSuccess).json(Fungsi.AllProductFailed());
				else
				{
					if(results.length > 0)
						res.status(fixvalue.Code.OK).json(Fungsi.AllProductSuccess(results));
					else
						res.status(fixvalue.Code.NotSuccess).json(Fungsi.AllProductEmpty());
				}
			});
		}
	});
};

module.exports = {getImageProduct : ctrlImageProduct, getAllProduct : ctrlAllProduct};
