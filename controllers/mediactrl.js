/**
 * Created by ignat on 03-Jan-17.
 */

let MediaModel = require('./../models/mediamodel');
let Fungsi = require('../utils/AllFunction');
let fixvalue = require('./../utils/fixvalue.json');

let ctrlProduct = function(req, res)
{
	var filesource = fixvalue.PhotoDir.SiswaBaru + req.params.Handphone + "/" + req.params.Photo;

	res.download(filesource, req.params.Handphone, function (err)
	{
		if(err)
			res.status(fixvalue.Code.Error).json(Fungsi.ProductDataFailed());
	});
};

module.exports = {getProduct : ctrlProduct};
