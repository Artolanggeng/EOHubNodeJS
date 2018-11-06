/**
 * Created by ignat on 03-Jan-17.
 */

let BrandModel = require('./../models/brandmodel');
let Fungsi = require('../utils/AllFunction');
let Fixvalue = require('./../utils/fixvalue.json');

let ctrlAllBrand = function(req, res)
{
	req.getConnection(function (err, conn)
	{
		if(err)
			res.status(Fixvalue.Code.Error).json(Fungsi.SQLFailed());
		else
		{
			BrandModel.AllBrandData(conn, function (err, results)
			{
				if(err)
					res.status(Fixvalue.Code.NotSuccess).json(Fungsi.AllBrandFailed());
				else
				{
					if(results.length > 0)
						res.status(Fixvalue.Code.OK).json(Fungsi.AllBrandSuccess(results));
					else
						res.status(Fixvalue.Code.NotSuccess).json(Fungsi.AllBrandEmpty());
				}
			});
		}
	});
};

module.exports = {getAllBrand : ctrlAllBrand};
