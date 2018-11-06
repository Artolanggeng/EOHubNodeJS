/**
 * Created by ignat on 03-Jan-17.
 */

let Fungsi = require('../utils/AllFunction');
let Fixvalue = require('./../utils/fixvalue.json');

let ctrlImageBrand = function(req, res)
{
	res.download(Fixvalue.ImageDir.Brand + req.params.Filename, '', function (err)
	{
		if(err)
			res.status(Fixvalue.Code.Error).json(Fungsi.ImageProductFailed());
	});
};

let ctrlImageProduct = function(req, res)
{
	res.download(Fixvalue.ImageDir.Product + req.params.Filename, '', function (err)
	{
		if(err)
			res.status(Fixvalue.Code.Error).json(Fungsi.ImageProductFailed());
	});
};

module.exports = {getImageProduct : ctrlImageProduct, getImageBrand : ctrlImageBrand};
