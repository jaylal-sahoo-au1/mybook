// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import initDB from '../../lib/mongodb';
import javascripttemplate from '../../models/jstemplate';

initDB();

export default (req, res) => {
	javascripttemplate.find().then((data) => {
		res.status(200).json(data);
	});
};
