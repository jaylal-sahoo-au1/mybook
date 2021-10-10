// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import initDB from '../../lib/mongodb';
import projects from '../../models/template';

initDB();

export default (req, res) => {
	projects.find({ project_type: 'javascript' }).then((data) => {
		res.status(200).json(data);
	});
};
