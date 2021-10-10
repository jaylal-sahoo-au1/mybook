import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema({
	img: {
		type: 'String',
		required: false,
	},
	heading: {
		type: 'String',
		required: false,
	},
	title: {
		type: 'String',
		required: false,
	},
	subheader: {
		type: 'String',
		required: false,
	},
	actionbutton: {
		type: 'Object',
		required: false,
	},
	paragraph: {
		type: 'String',
		required: false,
	},
	verify: {
		type: 'String',
		required: false,
	},
	project_type: {
		type: 'String',
		required: false,
	},
});

export default mongoose.models.project ||
	mongoose.model('project', templateSchema);
