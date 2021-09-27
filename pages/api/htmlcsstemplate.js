// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import initDB from '../../lib/mongodb';
import htmlcsstemplate from '../../models/htmlcsstemplate';

initDB();

export default (req, res) => {
	htmlcsstemplate.find().then((data) => {
		res.status(200).json(data);
	});
};
