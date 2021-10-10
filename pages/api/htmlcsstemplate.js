// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import initDB from '../../lib/mongodb';
import projects from '../../models/template';

initDB();

export default function handler(req, res) {
	if (req.method === 'POST') {
		htmlcsstemplate
			.create(JSON.parse(req.body))
			.then((data) => {
				res.status(200).json({
					message: 'Post added successfully',
					success: true,
				});
			})
			.catch((e) => console.log(e));
	} else {
		projects.find({ project_type: 'html_css' }).then((data) => {
			res.status(200).json(data);
		});
	}
}
