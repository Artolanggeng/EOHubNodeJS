/**
 * Created by ignat on 03-Jan-17.
 */
let Fungsi = require('./../utils/fungsi');
let fixvalue = require('./../utils/fixvalue.json');

let strQuery;
let data;

const shouldAbort = (err) =>
{
	if (err)
	{
		console.error('Error in transaction', err.stack)
		pgconn.query('ROLLBACK', (err) =>
		{
			if (err)
				console.error('Error rolling back client', err.stack)
		});
	}

	return !!err;
};


module.exports.modelDaftarUser =
  function (req, res, callback)
  {
    data = req.body["DataUser"];
    let username = req.body["DataUser"]["username"];

    let intIdx = 0;
    let datakey = '(';
    let dataisi = '';

    for (let key in data)
    {
      if(intIdx > 0)
      {
        datakey += ',';
        dataisi += ',';
      }

      datakey += '"' + key + '"';
      dataisi += "'" + data[key] + "'";
      intIdx++;
    }

    datakey += ')';

    strQuery = 'SELECT * FROM users WHERE username=\'' + username + '\'';

    pgconn.query(strQuery, (err, resqueryuser) =>
    {
      if (shouldAbort(err) || (resqueryuser === undefined))
        res.status(fixvalue.Kode.Error).json(Fungsi.DaftarUserGagal());
      else
      if(resqueryuser.rows.length !== 0)
          res.status(fixvalue.Kode.Error).json(Fungsi.DaftarUserAda());
      else
      {
        strQuery = 'INSERT INTO "users" ' + datakey + ' SELECT ' + dataisi +
                   ' WHERE NOT EXISTS(SELECT * FROM users WHERE username=\'' + username + '\')';

        pgconn.query(strQuery, (err, resdevice) =>
        {
          if (shouldAbort(err) || (resdevice === undefined))
            res.status(fixvalue.Kode.Error).json(Fungsi.DaftarUserGagal());
          else
            pgconn.query('COMMIT', callback);
        });
      }
    });
  };

