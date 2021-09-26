import mongoose from 'mongoose';

const jstemplateSchema = new mongoose.Schema({
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
});

export default mongoose.models.javascripttemplate ||
	mongoose.model('javascripttemplate', jstemplateSchema);
